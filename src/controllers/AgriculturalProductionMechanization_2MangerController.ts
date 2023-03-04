import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, In, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';

import { AgriculturalProductionMechanization_2 } from '../entities/AgriculturalProductionMechanization_2';
import AgriculturalProductionMechanization_2_Repository from '../repositories/AgriculturalProductionMechanization_2_Repository';

@route('/api/agriculturalInputsOutputs/manger')
export default class AgriculturalProductionMechanization_2MangerController {
  private _agriculturalProductionMechanization_2_Repository: AgriculturalProductionMechanization_2_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._agriculturalProductionMechanization_2_Repository =
      connection.getCustomRepository(
        AgriculturalProductionMechanization_2_Repository
      );
  }
  /** 农业相关投入与机械化
   */
  @route('/productionConditionsAndInputsByYears')
  @POST()
  @before(inject(AuthenticationMiddleware))
  async productionConditionsAndInputsByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number(),
        offset: number(),
      })
    );
    let filterQuery: SelectQueryBuilder<AgriculturalProductionMechanization_2> =
      null;
    if (ctx.request.body['year'].length) {
      // logger.info(JSON.stringify(ctx.request.body, null, 2));

      filterQuery = await this._agriculturalProductionMechanization_2_Repository
        .createQueryBuilder('agriculturalProductionMechanization_2')
        .where('agriculturalProductionMechanization_2.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('agriculturalProductionMechanization_2.year');
    } else {
      filterQuery = await this._agriculturalProductionMechanization_2_Repository
        .createQueryBuilder('agriculturalProductionMechanization_2')
        .orderBy('agriculturalProductionMechanization_2.year');
    }

    // 符合查询条件数量
    const agriculturalProductionMechanization_2Count: Number =
      await filterQuery.getCount();

    // 查询结果为空
    if (!agriculturalProductionMechanization_2Count) {
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
    const repAgriculturalProductionMechanization_2: AgriculturalProductionMechanization_2[] =
      await filterQuery.getMany();
    const agriculturalProductionMechanization_2s: object[] = [];
    await Promise.all(
      repAgriculturalProductionMechanization_2.map(
        async (item: AgriculturalProductionMechanization_2) => {
          agriculturalProductionMechanization_2s.push(item.toJSON());
        }
      )
    );
    ctx.body = {
      data: agriculturalProductionMechanization_2s,
      count: agriculturalProductionMechanization_2Count,
    };
    ctx.state = { OK };
  }

  /**
   *
   * @param ctx
   *  description: 添加农业相关投入与机械化

   */
  @route('/addProductionConditionsAndInputs')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addProductionConditionsAndInputs(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            combine: number().required(),
            combinePower: number().required(),
            dieselEngines: number().required(),
            gasolineEngines: number().required(),
            largeMachinery: number().required(),
            largePower: number().required(),
            largeTractors: number().required(),
            miniMachinery: number().required(),
            miniPowers: number().required(),
            miniTractors: number().required(),
            motorizedThresher: number().required(),
            pumps: number().required(),
            effectiveIrrigationArea: number().required(),
            electricityRuralArea: number().required(),
            pumpedIrrigationArea: number().required(),
            floodDroughtArea: number().required(),
            nitrogenousFertilizer: number().required(),
            phosphateFertilizer: number().required(),
            potashFertilizer: number().required(),
            mulchFilm: number().required(),
            mulchFilmArea: number().required(),
            comsumptionPesticide: number().required(),
            agriculturalDieselOil: number().required(),
            compoundFertilizer: number().required(),
            year: string().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData =
      await this._agriculturalProductionMechanization_2_Repository.find({
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
      .into(AgriculturalProductionMechanization_2)
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
   *  description: 更新农业相关投入与机械化
   *                  年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   */
  @route('/updeteProductionConditionsAndInputs')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteProductionConditionsAndInputs(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          combine: number().required(),
          combinePower: number().required(),
          dieselEngines: number().required(),
          gasolineEngines: number().required(),
          largeMachinery: number().required(),
          largePower: number().required(),
          largeTractors: number().required(),
          miniMachinery: number().required(),
          miniPowers: number().required(),
          miniTractors: number().required(),
          motorizedThresher: number().required(),
          pumps: number().required(),
          effectiveIrrigationArea: number().required(),
          electricityRuralArea: number().required(),
          pumpedIrrigationArea: number().required(),
          floodDroughtArea: number().required(),
          nitrogenousFertilizer: number().required(),
          phosphateFertilizer: number().required(),
          potashFertilizer: number().required(),
          mulchFilm: number().required(),
          mulchFilmArea: number().required(),
          comsumptionPesticide: number().required(),
          agriculturalDieselOil: number().required(),
          compoundFertilizer: number().required(),
        }).required(),
      })
    );
    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(AgriculturalProductionMechanization_2)
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
   *  description: 删除农业相关投入与机械化

   */
  @route('/deleteProductionConditionsAndInputs')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async deleteProductionConditionsAndInputs(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
      })
    );

    const isDelRef = await getConnection()
      .createQueryBuilder()
      .from(
        AgriculturalProductionMechanization_2,
        'agriculturalProductionMechanization_2'
      )
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
      .from(AgriculturalProductionMechanization_2)
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
