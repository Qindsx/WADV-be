import { GrossIndicesgross_3 } from '../entities/GrossIndicesgross_3';
import GrossIndicesgross_3_Repository from '../repositories/GrossIndicesgross_3_Repository';
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
export default class GrossIndicesgross_3MangerController {
  private _grossIndicesgross_3_Repository: GrossIndicesgross_3_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._grossIndicesgross_3_Repository = connection.getCustomRepository(
      GrossIndicesgross_3_Repository
    );
  }
  //
  /**
   * description: 历年农林牧渔总产值及指数
   *
   */
  @route('/productionValueInfoByYears')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async productionValueInfoByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number().required(),
        offset: number().required(),
      })
    );

    //  查询条件
    let filterQuery: SelectQueryBuilder<GrossIndicesgross_3> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._grossIndicesgross_3_Repository
        .createQueryBuilder('grossIndicesgross_3')
        .where('grossIndicesgross_3.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('grossIndicesgross_3.year');
    } else {
      filterQuery = await this._grossIndicesgross_3_Repository
        .createQueryBuilder('grossIndicesgross_3')
        .orderBy('grossIndicesgross_3.year');
    }

    // 符合查询条件数量
    const grossIndicesgross_3Count: Number = await filterQuery.getCount();

    // 查询结果为空
    if (!grossIndicesgross_3Count) {
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

    // 返回按年份查询结果
    const repGrossIndicesgross_3: GrossIndicesgross_3[] =
      await filterQuery.getMany();

    const grossIndicesgross_3s: object[] = [];
    await Promise.all(
      repGrossIndicesgross_3.map(async (item: GrossIndicesgross_3) => {
        grossIndicesgross_3s.push(item.toJSON());
      })
    );
    ctx.body = {
      data: grossIndicesgross_3s,
      count: grossIndicesgross_3Count,
    };
    ctx.state = { OK };
  }

  /**
   *
   * @param ctx
   *  description: 添加历年农林牧渔总产值及指数
   */
  @route('/addProductionValue')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            year: string().required(),
            /**
             * 农林牧渔总产值
             */
            grossOutputValue: number().required(),
            /**
             * 农业
             */
            indicesGrossFarming: number().required(),
            /**
             * 渔业
             */
            indicesGrossFishery: number().required(),
            /**
             * 林业
             */
            indicesGrossForestry: number().required(),
            /**
             * 牧业
             */
            indicesGrossHusbandry: number().required(),
            /**
             * 农林渔牧总产值指数
             */
            indicesGrossTotal: number().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData = await this._grossIndicesgross_3_Repository.find({
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
      .into(GrossIndicesgross_3)
      .values(ctx.request.body['data'])
      .execute();
    if (addRes) {
      ctx.body = { messag: '添加成功!' };
      ctx.state = { OK };
    }
  }

  /**
   *G
   * @param ctx
   *  description: 更新历年农林牧渔总产值及指数
   *                  年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   */
  @route('/updeteProductionValue')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          /**
           * 农林牧渔总产值
           */
          grossOutputValue: number().required(),
          /**
           * 农业
           */
          indicesGrossFarming: number().required(),
          /**
           * 渔业
           */
          indicesGrossFishery: number().required(),
          /**
           * 林业
           */
          indicesGrossForestry: number().required(),
          /**
           * 牧业
           */
          indicesGrossHusbandry: number().required(),
          /**
           * 农林渔牧总产值指数
           */
          indicesGrossTotal: number().required(),
        }).required(),
      })
    );
    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(GrossIndicesgross_3)
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
   *  description: 删除历年农林牧渔总产值及指数
   */
  @route('/deleteProductionValue')
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
      .from(GrossIndicesgross_3, 'grossIndicesgross_3')
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
      .from(GrossIndicesgross_3)
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
