import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, In, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';

import { MajorAgriculturalProducts_6 } from '../entities/MajorAgriculturalProducts_6';
import MajorAgriculturalProducts_6_Repository from '../repositories/MajorAgriculturalProducts_6_Repository';

@route('/api/agriculturalInputsOutputs/manger')
export default class CategoryGrossOutput_5MangerController {
  private _majorAgriculturalProducts_6_Repository: MajorAgriculturalProducts_6_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._majorAgriculturalProducts_6_Repository =
      connection.getCustomRepository(MajorAgriculturalProducts_6_Repository);
  }

  /**  主要农产品产量
   */
  @route('/agriculturalProductionByYears')
  @POST()
  @before(inject(AuthenticationMiddleware))
  async agriculturalProductionByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number(),
        offset: number(),
      })
    );
    let filterQuery: SelectQueryBuilder<MajorAgriculturalProducts_6> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._majorAgriculturalProducts_6_Repository
        .createQueryBuilder('majorAgriculturalProducts_6')
        .where('majorAgriculturalProducts_6.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('majorAgriculturalProducts_6.year');
    } else {
      filterQuery = await this._majorAgriculturalProducts_6_Repository
        .createQueryBuilder('majorAgriculturalProducts_6')
        .orderBy('majorAgriculturalProducts_6.year');
    }

    // 符合查询条件数量
    const majorAgriculturalProducts_6Count: Number =
      await filterQuery.getCount();

    // 查询结果为空
    if (!majorAgriculturalProducts_6Count) {
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
      filterQuery.take(ctx.request.body['offset']);
    }

    // 查询所有年份（分页）

    // 返回按年份查询结果
    const repMajorAgriculturalProducts_6: MajorAgriculturalProducts_6[] =
      await filterQuery.getMany();
    const majorAgriculturalProducts_6s: object[] = [];
    await Promise.all(
      repMajorAgriculturalProducts_6.map(
        async (item: MajorAgriculturalProducts_6) => {
          majorAgriculturalProducts_6s.push(item.toJSON());
        }
      )
    );
    ctx.body = {
      data: majorAgriculturalProducts_6s,
      count: majorAgriculturalProducts_6Count,
    };
    ctx.state = { OK };
  }

  /**
   *
   * @param ctx
   *  description: 添加主要农产品产量
   */
  @route('/addAgriculturalProduction')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addAgriculturalProduction(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            aquaticProducts: number().required(),
            cotton: number().required(),
            eggs: number().required(),
            fruit: number().required(),
            grains: number().required(),
            milk: number().required(),
            oilBearing: number().required(),
            slaughteredHogs: number().required(),
            slaughteredPoultry: number().required(),
            vagetables: number().required(),
            year: string().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData =
      await this._majorAgriculturalProducts_6_Repository.find({
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
      .into(MajorAgriculturalProducts_6)
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
   *  description: 更新主要农产品产量
   *                  年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   */
  @route('/updeteAgriculturalProduction')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          aquaticProducts: number().required(),
          cotton: number().required(),
          eggs: number().required(),
          fruit: number().required(),
          grains: number().required(),
          milk: number().required(),
          oilBearing: number().required(),
          slaughteredHogs: number().required(),
          slaughteredPoultry: number().required(),
          vagetables: number().required(),
        }).required(),
      })
    );
    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(MajorAgriculturalProducts_6)
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
   *  description: 删除主要农产品产量
   */
  @route('/deleteAgriculturalProduction')
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
      .from(MajorAgriculturalProducts_6, 'majorAgriculturalProducts_6')
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
      .from(MajorAgriculturalProducts_6)
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
