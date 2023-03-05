import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, In, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';

import CropsSownOutputHectare_7_Repository from '../repositories/CropsSownOutputHectare_7_Repository';
import { CropsSownOutputHectare_7 } from '../entities/CropsSownOutputHectare_7';
import logger from '../logger';

@route('/api/agriculturalProduction/manger')
export default class CategoryGrossOutput_5MangerController {
  private _cropsSownOutputHectare_7_Repository: CropsSownOutputHectare_7_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._cropsSownOutputHectare_7_Repository = connection.getCustomRepository(
      CropsSownOutputHectare_7_Repository
    );
  }
  /** 农作物生产情况(播种面积、单位产量、产量)
   */
  @route('/cropProductionByYears')
  @POST()
  // @before(inject(AuthenticationMiddleware))
  async cropProductionByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        classify: string().allow(''),
        limit: number(),
        offset: number(),
      })
    );
    let filterQuery: SelectQueryBuilder<CropsSownOutputHectare_7> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._cropsSownOutputHectare_7_Repository
        .createQueryBuilder('cropsSownOutputHectare_7')
        .where('cropsSownOutputHectare_7.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .andWhere('cropsSownOutputHectare_7.classify like :classify', {
          classify: `%${ctx.request.body['classify']}%`,
        })
        .orderBy('cropsSownOutputHectare_7.year');
    } else {
      filterQuery = await this._cropsSownOutputHectare_7_Repository
        .createQueryBuilder('cropsSownOutputHectare_7')
        .where('cropsSownOutputHectare_7.classify like :classify', {
          classify: `%${ctx.request.body['classify']}%`,
        })
        .orderBy('cropsSownOutputHectare_7.year');
    }

    // 符合查询条件数量
    const cropsSownOutputHectare_7Count: Number = await filterQuery.getCount();

    let sql = await filterQuery.getSql();
    logger.info(sql);
    // 查询结果为空
    if (!cropsSownOutputHectare_7Count) {
      ctx.body = { data: [], cropsSownOutputHectare_7Count: 0 };
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

    // 返回按年份查询结果
    const repCropsSownOutputHectare_7: CropsSownOutputHectare_7[] =
      await filterQuery.getMany();
    const cropsSownOutputHectare_7s: object[] = [];
    await Promise.all(
      repCropsSownOutputHectare_7.map(
        async (item: CropsSownOutputHectare_7) => {
          cropsSownOutputHectare_7s.push(item.toJSON());
        }
      )
    );
    ctx.body = {
      data: cropsSownOutputHectare_7s,
      count: cropsSownOutputHectare_7Count,
    };
    ctx.state = { OK };
  }

  /**
   *
   * @param ctx
   *  description: 添加农作物生产情况(播种面积、单位产量、产量)
   */
  @route('/addCropProduction')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addCropProduction(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            autumnGrainCrops: number().required(),
            corn: number().required(),
            cotton: number().required(),
            doubleRotationRice: number().required(),
            earlySeasonRice: number().required(),
            fiberCrops: number().required(),
            grainCrops: number().required(),
            herbCrops: number().required(),
            melons: number().required(),
            midSeasonRice: number().required(),
            oilBerain: number().required(),
            otherCerealsAutumn: number().required(),
            otherCerealsSummer: number().required(),
            paddyRice: number().required(),
            peanuts: number().required(),
            rapeSeeds: number().required(),
            sesame: number().required(),
            soybeanAutumn: number().required(),
            soybeanSummer: number().required(),
            sugarCrops: number().required(),
            summerGrainCrops: number().required(),
            tobacco: number().required(),
            tuberCropsAutumn: number().required(),
            tuberCropsSummer: number().required(),
            vagetable: number().required(),
            wheat: number().required(),
            vagetableMelons: number().required(),
            classify: string().required(),
            year: string().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData =
      await this._cropsSownOutputHectare_7_Repository.find({
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
      .into(CropsSownOutputHectare_7)
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
   *  description: 更新农作物生产情况(播种面积、单位产量、产量)
   *                  年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   */
  @route('/updeteCropProductione')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          autumnGrainCrops: number().required(),
          corn: number().required(),
          cotton: number().required(),
          doubleRotationRice: number().required(),
          earlySeasonRice: number().required(),
          fiberCrops: number().required(),
          grainCrops: number().required(),
          herbCrops: number().required(),
          melons: number().required(),
          midSeasonRice: number().required(),
          oilBerain: number().required(),
          otherCerealsAutumn: number().required(),
          otherCerealsSummer: number().required(),
          paddyRice: number().required(),
          peanuts: number().required(),
          rapeSeeds: number().required(),
          sesame: number().required(),
          soybeanAutumn: number().required(),
          soybeanSummer: number().required(),
          sugarCrops: number().required(),
          summerGrainCrops: number().required(),
          tobacco: number().required(),
          tuberCropsAutumn: number().required(),
          tuberCropsSummer: number().required(),
          vagetableMelons: number().required(),
          vagetable: number().required(),
          wheat: number().required(),
          classify: string().required(),
        }).required(),
      })
    );
    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(CropsSownOutputHectare_7)
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
   *  description: 删除农作物生产情况(播种面积、单位产量、产量)
   */
  @route('/deleteCropProduction')
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
      .from(CropsSownOutputHectare_7, 'cropsSownOutputHectare_7')
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
      .from(CropsSownOutputHectare_7)
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
