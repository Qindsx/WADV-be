import { RuralInfrastructure_1 } from '../entities/RuralInfrastructure_1';
import RuralInfrastructure_1_Repository from '../repositories/RuralInfrastructure_1_Repository';
import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, In, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';

@route('/api/basicInfo/manger')
export default class RuralInfrastructure_1MangerController {
  private _ruralInfrastructure_1_Repository: RuralInfrastructure_1_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._ruralInfrastructure_1_Repository = connection.getCustomRepository(
      RuralInfrastructure_1_Repository
    );
  }

  /** 农村基层组织﹑户数、人口、从业人员  */
  @route('/grassrootsInfoByYears')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async grassrootsInfoByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number().required(),
        offset: number().required(),
      })
    );
    let filterQuery: SelectQueryBuilder<RuralInfrastructure_1> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._ruralInfrastructure_1_Repository
        .createQueryBuilder('rural_infrastructure_1')
        .where('rural_infrastructure_1.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('rural_infrastructure_1.year');
    } else {
      filterQuery = await this._ruralInfrastructure_1_Repository
        .createQueryBuilder('rural_infrastructure_1')
        .orderBy('rural_infrastructure_1.year');
    }

    // }

    // 符合查询条件数量
    const ruralInfrastructure_1Count: Number = await filterQuery.getCount();

    // 查询结果为空
    if (!ruralInfrastructure_1Count) {
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
    const repRuralInfrastructure_1: RuralInfrastructure_1[] =
      await filterQuery.getMany();
    const ruralInfrastructure_1s: object[] = [];
    await Promise.all(
      repRuralInfrastructure_1.map(async (item: RuralInfrastructure_1) => {
        ruralInfrastructure_1s.push(item.toJSON());
      })
    );
    ctx.body = {
      data: ruralInfrastructure_1s,
      count: ruralInfrastructure_1Count,
    };
    ctx.state = { OK };
  }

  /**
   *
   * @param ctx
   *  description: 添加农村基层组织﹑户数、人口、从业人员
   */
  @route('/addGrassroots')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addGrassroots(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            year: string().required(),
            /**
             * 农业从业人员(万人)
             */
            agriculturalLaborers: number().required(),
            /**
             * 农林牧渔(万人)
             */
            agricultureEmployees: number().required(),
            /**
             * 非农业从业人员(万人)
             */
            noAgriculturalLaborers: number().required(),
            /**
             * 非农从业人员(万人)
             */
            noAgricultureEmployees: number().required(),
            /**
             * 村委会(个)
             */
            subdistrictOff: number().required(),
            /**
             * 办事处(个)
             */
            townGov: number().required(),
            /**
             * 乡政府（个）
             */
            townshipGov: number().required(),
            /**
             * 村民小组(个)
             */
            villagersCom: number().required(),
            /**
             * 村民小组(个)
             */
            villagersSub: number().required(),
            /**
             * 通宽带村数(个)
             */
            villagesBroad: number().required(),
            /**
             * 通宽带村数占全部村委会比重(%)
             */
            villagesPropBroad: number().required(),
            /**
             * 通有线电视村数占全部村委会比重(%)
             */
            villagesPropTv: number().required(),
            /**
             * 自来水受益村数占全部村委会比重(%)
             */
            villagesPropWater: number().required(),
            /**
             * 通有线电视村数(个)
             */
            villagesTv: number().required(),
            /**
             * 自来水受益村数(个)
             */
            villagesWater: number().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);
    // 判断添加的年份是否存在
    const isYearExistData = await this._ruralInfrastructure_1_Repository.find({
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
      .into(RuralInfrastructure_1)
      .values(ctx.request.body['data'])
      .execute();
    if (addRes) {
      ctx.body = { messag: '添加成功!' };
      ctx.state = { OK };
    }
  }

  /**
   *
   * @param ctx
   *  description: 更新农村基层组织﹑户数、人口、从业人员
   *                   年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   *
   */
  @route('/updeteGrassroots')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteGrassroots(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          /**
           * 农业从业人员(万人)
           */
          agriculturalLaborers: number().required(),
          /**
           * 农林牧渔(万人)
           */
          agricultureEmployees: number().required(),
          /**
           * 非农业从业人员(万人)
           */
          noAgriculturalLaborers: number().required(),
          /**
           * 非农从业人员(万人)
           */
          noAgricultureEmployees: number().required(),
          /**
           * 村委会(个)
           */
          subdistrictOff: number().required(),
          /**
           * 办事处(个)
           */
          townGov: number().required(),
          /**
           * 乡政府（个）
           */
          townshipGov: number().required(),
          /**
           * 村民小组(个)
           */
          villagersCom: number().required(),
          /**
           * 村民小组(个)
           */
          villagersSub: number().required(),
          /**
           * 通宽带村数(个)
           */
          villagesBroad: number().required(),
          /**
           * 通宽带村数占全部村委会比重(%)
           */
          villagesPropBroad: number().required(),
          /**
           * 通有线电视村数占全部村委会比重(%)
           */
          villagesPropTv: number().required(),
          /**
           * 自来水受益村数占全部村委会比重(%)
           */
          villagesPropWater: number().required(),
          /**
           * 通有线电视村数(个)
           */
          villagesTv: number().required(),
          /**
           * 自来水受益村数(个)
           */
          villagesWater: number().required(),
        }).required(),
      })
    );

    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(RuralInfrastructure_1)
      .set({ year: ctx.request.body['year'], ...ctx.request.body['data'] })
      .where('year = :year', { year: ctx.request.body['year'] })
      .execute();
    if (updeteRes.affected == 0) {
      ctx.throw(CONFLICT, '该年份数据不存在');
    } else {
      ctx.body = { messag: '更新成功!' };
      ctx.state = { OK };
    }
  }

  /**
   *
   * @param ctx
   *  description: 删除农村基层组织﹑户数、人口、从业人员
   *
   */
  @route('/deleteGrassroots')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async deleteGrassroots(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
      })
    );

    const isDelRef = await getConnection()
      .createQueryBuilder()
      .from(RuralInfrastructure_1, 'rural_infrastructure_1')
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
      .from(RuralInfrastructure_1)
      .where('year  IN (:...years)', { years: ctx.request.body['year'] })
      .execute();
    if (deleteRes.affected == 0) {
      ctx.throw(CONFLICT, '数据不存在，无法删除');
    } else {
      ctx.body = { messag: '删除成功!' };
      ctx.state = { OK };
    }
  }
}
