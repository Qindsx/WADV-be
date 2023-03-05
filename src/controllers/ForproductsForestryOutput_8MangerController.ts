import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, In, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';

import { ForproductsForestryOutput_8 } from '../entities/ForproductsForestryOutput_8';
import ForproductsForestryOutput_8_Repository from '../repositories/ForproductsForestryOutput_8_Repository';

@route('/api/agriculturalProduction/manger')
export default class CategoryGrossOutput_5MangerController {
  private _forproductsForestryOutput_8_Repository: ForproductsForestryOutput_8_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._forproductsForestryOutput_8_Repository =
      connection.getCustomRepository(ForproductsForestryOutput_8_Repository);
  }

  /**  林业生产情况  */
  @route('/forestryProductionByYears')
  @POST()
  @before(inject(AuthenticationMiddleware))
  async forestryProductionByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number(),
        offset: number(),
      })
    );
    let filterQuery: SelectQueryBuilder<ForproductsForestryOutput_8> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._forproductsForestryOutput_8_Repository
        .createQueryBuilder('forproductsForestryOutput_8')
        .where('forproductsForestryOutput_8.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('forproductsForestryOutput_8.year');
    } else {
      filterQuery = await this._forproductsForestryOutput_8_Repository
        .createQueryBuilder('forproductsForestryOutput_8')
        .orderBy('forproductsForestryOutput_8.year');
    }

    // 符合查询条件数量
    const forproductsForestryOutput_8Count: Number =
      await filterQuery.getCount();

    // 查询结果为空
    if (!forproductsForestryOutput_8Count) {
      ctx.body = { data: [], articlesCount: 0 };
      ctx.state = { OK };
      return;
    }

    //
    // 分页
    if (ctx.request.body['limit']) {
      filterQuery.take(ctx.request.body['limit']);
    }

    if (ctx.request.body['offset']) {
      filterQuery.skip(ctx.request.body['offset']);
    }

    // 查询所有年份（分页）

    // 返回按年份查询结果
    const repForproductsForestryOutput_8: ForproductsForestryOutput_8[] =
      await filterQuery.getMany();
    const forproductsForestryOutput_8s: object[] = [];
    await Promise.all(
      repForproductsForestryOutput_8.map(
        async (item: ForproductsForestryOutput_8) => {
          forproductsForestryOutput_8s.push(item.toJSON());
        }
      )
    );
    ctx.body = {
      data: forproductsForestryOutput_8s,
      count: forproductsForestryOutput_8Count,
    };
    ctx.state = { OK };
  }

  /**
   *
   * @param ctx
   *  description: 添加林业生产情况
   */
  @route('/addForestryProduction')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addCropProduction(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            bamboo: number().required(),
            bambooTimberHarvesting: number().required(),
            barrenMountain: number().required(),
            blackFungus: number().required(),
            chineseChestnut: number().required(),
            chineseGall: number().required(),
            chineseSapiumSeed: number().required(),
            forestAfforestation: number().required(),
            // forestGermchit: number().required(),
            forestTendingArea: number().required(),
            mushroom: number().required(),
            nanBamboo: number().required(),
            oilTeaCamelliaSeed: number().required(),
            reforestationArea: number().required(),
            scatteredTreePlanging: number().required(),
            seedlingArea: number().required(),
            seedlingYield: number().required(),
            seedsTungOilTree: number().required(),
            sundryBamboo: number().required(),
            timber: number().required(),
            whiteFungus: number().required(),
            year: string().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData =
      await this._forproductsForestryOutput_8_Repository.find({
        where: { year: In(years) },
      });
    if (isYearExistData.length) {
      const isYearExistYears = isYearExistData.map((item) => item.year);
      ctx.throw(
        CONFLICT,
        `(${isYearExistYears.join(' ')})年份数据已存在,请确认相关数据后重试`
      );
    }

    // 重复年份数据
    if (uniq(years).length !== years.length) {
      ctx.throw(CONFLICT, `有年份数据重复，请确认相关数据后重试`);
    }
    const addRes = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(ForproductsForestryOutput_8)
      .values(ctx.request.body['data'])
      .execute();
    if (addRes) {
      ctx.body = { message: '添加成功!' };
      ctx.state = { OK };
    }
  }

  /**
   *G
   * @param ctx
   *  description: 更新林业生产情况
   *                  年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   */
  @route('/updeteForestryProduction')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          bamboo: number().required(),
          bambooTimberHarvesting: number().required(),
          barrenMountain: number().required(),
          blackFungus: number().required(),
          chineseChestnut: number().required(),
          chineseGall: number().required(),
          chineseSapiumSeed: number().required(),
          forestAfforestation: number().required(),
          // forestGermchit: number().required(),
          forestTendingArea: number().required(),
          mushroom: number().required(),
          nanBamboo: number().required(),
          oilTeaCamelliaSeed: number().required(),
          reforestationArea: number().required(),
          scatteredTreePlanging: number().required(),
          seedlingArea: number().required(),
          seedlingYield: number().required(),
          seedsTungOilTree: number().required(),
          sundryBamboo: number().required(),
          timber: number().required(),
          whiteFungus: number().required(),
        }).required(),
      })
    );
    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(ForproductsForestryOutput_8)
      .set({ year: ctx.request.body['year'], ...ctx.request.body['data'] })
      .where('year = :year', { year: ctx.request.body['year'] })
      .execute();
    if (updeteRes.affected == 0) {
      ctx.throw(CONFLICT, '该年份数据不存在');
    } else {
      ctx.body = { message: '更新成功!' };
      ctx.state = { OK };
    }
  }

  /**
   *
   * @param ctx
   *  description: 删除林业生产情况
   */
  @route('/deleteForestryProduction')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async deleteProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
      })
    );

    const isDelRef = await getConnection()
      .createQueryBuilder()
      .from(ForproductsForestryOutput_8, 'forproductsForestryOutput_8')
      .select(['year'])
      .where('year IN (:...years)', {
        years: ctx.request.body['year'],
      })
      .andWhere('isDel = FALSE')
      .execute();

    if (isDelRef.length > 0) {
      ctx.throw(
        CONFLICT,
        `(${isDelRef.map((item) => item.year)})年份数据无法删除，请修改后重试`
      );
    }
    const deleteRes = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ForproductsForestryOutput_8)
      .where('year  IN (:...years)', { years: ctx.request.body['year'] })
      .execute();
    if (deleteRes.affected == 0) {
      ctx.throw(CONFLICT, '数据不存在，无法删除');
    } else {
      ctx.body = { message: '删除成功!' };
      ctx.state = { OK };
    }
  }
}
