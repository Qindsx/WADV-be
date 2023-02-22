import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';

import { RuralInfrastructure_1 } from '../entities/RuralInfrastructure_1';
import { GrossIndicesgross_3 } from '../entities/GrossIndicesgross_3';
import { GrossOutputCompoosition_4 } from '../entities/GrossOutputCompoosition_4';
import RuralInfrastructure_1_Repository from '../repositories/RuralInfrastructure_1_Repository';
import GrossIndicesgross_3_Repository from '../repositories/GrossIndicesgross_3_Repository';
import GrossOutputCompoosition_4_Repository from '../repositories/GrossOutputCompoosition_4_Repository';
import logger from '../logger';

@route('/api/basicInfo')
export default class RuralandAgriculturalBasicInformationController {
  private _ruralInfrastructure_1_Repository: RuralInfrastructure_1_Repository;
  private _grossIndicesgross_3_Repository: GrossIndicesgross_3_Repository;
  private _grossOutputCompoosition_4_Repository: GrossOutputCompoosition_4_Repository;

  constructor({ connection }: { connection: Connection }) {
    this._ruralInfrastructure_1_Repository = connection.getCustomRepository(
      RuralInfrastructure_1_Repository
    );

    this._grossIndicesgross_3_Repository = connection.getCustomRepository(
      GrossIndicesgross_3_Repository
    );
    this._grossOutputCompoosition_4_Repository = connection.getCustomRepository(
      GrossOutputCompoosition_4_Repository
    );
  }

  @route('/grassrootsInfoByYears')
  @POST()
  // @before([inject(AuthenticationMiddleware)])
  async grassrootsInfoByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number(),
        offset: number(),
      })
    );
    // const ruralInfrastructure_1: RuralInfrastructure_1 =
    //   new RuralInfrastructure_1();

    // const yearObj =

    // 查询条件
    // if (ctx.request.body['year'].length === 0) {
    //   const filterQuery: SelectQueryBuilder<RuralInfrastructure_1> = await this
    //     ._ruralInfrastructure_1_Repository.find();
    // } else {
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
      filterQuery.take(ctx.request.body['offset']);
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

  @route('/productionValueInfoByYears')
  @POST()
  // @before([inject(AuthenticationMiddleware)])
  async productionValueInfoByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number(),
        offset: number(),
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
      filterQuery.take(ctx.request.body['offset']);
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

  @route('/productionValueAndCompositionInfoByYears')
  @POST()
  // @before([inject(AuthenticationMiddleware)])
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
      logger.info(ctx.request.body['year'].length);
      filterQuery = await this._grossOutputCompoosition_4_Repository
        .createQueryBuilder('grossOutputCompoosition_4')
        .where('grossOutputCompoosition_4.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('grossOutputCompoosition_4.year');
    } else {
      logger.info(ctx.request.body['year'].length);
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
      filterQuery.take(ctx.request.body['offset']);
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
}
