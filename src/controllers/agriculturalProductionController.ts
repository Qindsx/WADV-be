import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';

import { CropsSownOutputHectare_7 } from '../entities/CropsSownOutputHectare_7';
import { ForproductsForestryOutput_8 } from '../entities/ForproductsForestryOutput_8';
import { StatisticsProduction_9 } from '../entities/StatisticsProduction_9';
import CropsSownOutputHectare_7_Repository from '../repositories/CropsSownOutputHectare_7_Repository';
import ForproductsForestryOutput_8_Repository from '../repositories/ForproductsForestryOutput_8_Repository';
import StatisticsProduction_9_Repository from '../repositories/StatisticsProduction_9_Repository';

@route('/api/agriculturalProduction')
export default class agriculturalProductionController {
  private _cropsSownOutputHectare_7_Repository: CropsSownOutputHectare_7_Repository;
  private _forproductsForestryOutput_8_Repository: ForproductsForestryOutput_8_Repository;
  private _statisticsProduction_9_Repository: StatisticsProduction_9_Repository;

  constructor({ connection }: { connection: Connection }) {
    this._cropsSownOutputHectare_7_Repository = connection.getCustomRepository(
      CropsSownOutputHectare_7_Repository
    );
    this._forproductsForestryOutput_8_Repository =
      connection.getCustomRepository(ForproductsForestryOutput_8_Repository);
    this._statisticsProduction_9_Repository = connection.getCustomRepository(
      StatisticsProduction_9_Repository
    );
  }

  @route('/cropProductionByYears')
  @POST()
  // @before(inject(AuthenticationMiddleware))
  async cropProductionByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        classify: string(),
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
        .andWhere('cropsSownOutputHectare_7.classify =:classify', {
          classify: ctx.request.body['classify'],
        })
        .orderBy('cropsSownOutputHectare_7.year');
    } else {
      filterQuery = await this._cropsSownOutputHectare_7_Repository
        .createQueryBuilder('cropsSownOutputHectare_7')
        .orderBy('cropsSownOutputHectare_7.year');
    }

    // 符合查询条件数量
    const cropsSownOutputHectare_7Count: Number = await filterQuery.getCount();

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
      filterQuery.take(ctx.request.body['offset']);
    }

    // 查询所有年份（分页）

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
  @route('/forestryProductionByYears')
  @POST()
  // @before(inject(AuthenticationMiddleware))
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
      filterQuery.take(ctx.request.body['offset']);
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
  @route('/otherProductionSituationByYears')
  @POST()
  // @before(inject(AuthenticationMiddleware))
  async otherProductionSituationByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number(),
        offset: number(),
      })
    );
    let filterQuery: SelectQueryBuilder<StatisticsProduction_9> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._statisticsProduction_9_Repository
        .createQueryBuilder('statisticsProduction_9')
        .where('statisticsProduction_9.year IN (:...years)', {
          years: ctx.request.body['year'],
        })
        .orderBy('statisticsProduction_9.year');
    } else {
      filterQuery = await this._statisticsProduction_9_Repository
        .createQueryBuilder('statisticsProduction_9')
        .orderBy('statisticsProduction_9.year');
    }

    // 符合查询条件数量
    const statisticsProduction_9Count: Number = await filterQuery.getCount();

    // 查询结果为空
    if (!statisticsProduction_9Count) {
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
    const repStatisticsProduction_9: StatisticsProduction_9[] =
      await filterQuery.getMany();
    const statisticsProduction_9s: object[] = [];
    await Promise.all(
      repStatisticsProduction_9.map(async (item: StatisticsProduction_9) => {
        statisticsProduction_9s.push(item.toJSON());
      })
    );
    ctx.body = {
      data: statisticsProduction_9s,
      count: statisticsProduction_9Count,
    };
    ctx.state = { OK };
  }
}
