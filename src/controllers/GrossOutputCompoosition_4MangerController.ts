import { GrossOutputCompoosition_4 } from '../entities/GrossOutputCompoosition_4';
import GrossOutputCompoosition_4_Repository from '../repositories/GrossOutputCompoosition_4_Repository';
import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, SelectQueryBuilder, In } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';
import logger from '../logger';

@route('/api/basicInfo/manger')
export default class GrossOutputCompoosition_4MangerController {
  private _grossOutputCompoosition_4_Repository: GrossOutputCompoosition_4_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._grossOutputCompoosition_4_Repository = connection.getCustomRepository(
      GrossOutputCompoosition_4_Repository
    );
  }
  /** 农林牧渔业产值及构成   */

  @route('/productionValueAndCompositionInfoByYears')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async productionValueAndCompositionInfoByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array(),
        limit: number(),
        offset: number(),
      })
    );

    //  查询条件
    let filterQuery: SelectQueryBuilder<GrossOutputCompoosition_4> = null;

    if (ctx.request.body['year'].length) {
      // logger.info(ctx.request.body['year'].length);
      filterQuery = await this._grossOutputCompoosition_4_Repository
        .createQueryBuilder('grossOutputCompoosition_4')
        .where('grossOutputCompoosition_4.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('grossOutputCompoosition_4.year');
    } else {
      // logger.info(ctx.request.body['year'].length);
      filterQuery = await this._grossOutputCompoosition_4_Repository
        .createQueryBuilder('grossOutputCompoosition_4')
        .orderBy('grossOutputCompoosition_4.year');
    }

    // 符合查询条件数量
    const grossOutputCompoosition_4Count: Number = await filterQuery.getCount();

    // 查询结果为空
    if (!grossOutputCompoosition_4Count) {
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
    const repGrossOutputCompoosition_4: GrossOutputCompoosition_4[] =
      await filterQuery.getMany();

    const grossOutputCompoosition_4s: object[] = [];
    await Promise.all(
      repGrossOutputCompoosition_4.map(
        async (item: GrossOutputCompoosition_4) => {
          grossOutputCompoosition_4s.push(item.toJSON());
        }
      )
    );
    ctx.body = {
      data: grossOutputCompoosition_4s,
      count: grossOutputCompoosition_4Count,
    };
    ctx.state = { OK };
  }

  /**  添加农林牧渔业产值及构成 */
  @route('/addProductionValueAndComposition')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addProductionValueAndComposition(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            year: string().required(),
            /**
             * 农业
             */
            farming: number().required(),
            /**
             * 渔业
             */
            fishery: number().required(),
            /**
             * 林业
             */
            forestry: number().required(),
            /**
             * 牧业
             */
            husbandry: number().required(),
            /**
             * 农林牧渔服务业
             */
            industrialService: number().required(),
            /**
             * 农林牧渔业总计
             */
            total: number().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData =
      await this._grossOutputCompoosition_4_Repository.find({
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
      .createQueryBuilder()
      .insert()
      .into(GrossOutputCompoosition_4)
      .values(ctx.request.body['data'])
      .execute();
    if (addRes) {
      ctx.body = { message: '添加成功!' };
      ctx.state = { OK };
    }
  }

  /**  更新农林牧渔业产值及构成 */
  @route('/updateProductionValueAndComposition')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updateProductionValueAndComposition(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          /**
           * 农业
           */
          farming: number().required(),
          /**
           * 渔业
           */
          fishery: number().required(),
          /**
           * 林业
           */
          forestry: number().required(),
          /**
           * 牧业
           */
          husbandry: number().required(),
          /**
           * 农林牧渔服务业
           */
          industrialService: number().required(),
          /**
           * 农林牧渔业总计
           */
          total: number().required(),
        }).required(),
      })
    );

    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(GrossOutputCompoosition_4)
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

  /**  删除农林牧渔业产值及构成 */
  @route('/deleteProductionValueAndComposition')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async deleteProductionValueAndComposition(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
      })
    );

    const isDelRef = await getConnection()
      .createQueryBuilder()
      .from(GrossOutputCompoosition_4, 'grossOutputCompoosition_4')
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
      .from(GrossOutputCompoosition_4)
      .where('year  IN (:...years)', { years: ctx.request.body['year'] })
      .execute();
    logger.info(JSON.stringify(deleteRes, null, 2));
    if (deleteRes.affected == 0) {
      ctx.throw(CONFLICT, '数据不存在，无法删除');
    } else {
      ctx.body = { message: '删除成功!' };
      ctx.state = { OK };
    }
  }
}
