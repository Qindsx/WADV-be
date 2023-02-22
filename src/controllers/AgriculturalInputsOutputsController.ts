import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';

import { AgriculturalProductionMechanization_2 } from '../entities/AgriculturalProductionMechanization_2';
import { CategoryGrossOutput_5 } from '../entities/CategoryGrossOutput_5';
import { MajorAgriculturalProducts_6 } from '../entities/MajorAgriculturalProducts_6';
import AgriculturalProductionMechanization_2_Repository from '../repositories/AgriculturalProductionMechanization_2_Repository';
import CategoryGrossOutput_5_Repository from '../repositories/CategoryGrossOutput_5_Repository';
import MajorAgriculturalProducts_6_Repository from '../repositories/MajorAgriculturalProducts_6_Repository';
import logger from '../logger';

@route('/api/agriculturalInputsOutputs')
export default class AgriculturalInputsOutputsController {
  private _agriculturalProductionMechanization_2_Repository: AgriculturalProductionMechanization_2_Repository;
  private _categoryGrossOutput_5_Repository: CategoryGrossOutput_5_Repository;
  private _majorAgriculturalProducts_6_Repository: MajorAgriculturalProducts_6_Repository;

  constructor({ connection }: { connection: Connection }) {
    this._agriculturalProductionMechanization_2_Repository =
      connection.getCustomRepository(
        AgriculturalProductionMechanization_2_Repository
      );
    this._categoryGrossOutput_5_Repository = connection.getCustomRepository(
      CategoryGrossOutput_5_Repository
    );
    this._majorAgriculturalProducts_6_Repository =
      connection.getCustomRepository(MajorAgriculturalProducts_6_Repository);
  }

  @route('/productionConditionsAndInputsByYears')
  @POST()
  @before(inject(AuthenticationMiddleware))
  async productionConditionsAndInputsByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number().required(),
        offset: number().required(),
      })
    );
    let filterQuery: SelectQueryBuilder<AgriculturalProductionMechanization_2> =
      null;
    if (ctx.request.body['year'].length) {
      logger.info(JSON.stringify(ctx.request.body, null, 2));

      filterQuery = await this._agriculturalProductionMechanization_2_Repository
        .createQueryBuilder('agriculturalProductionMechanization_2')
        .where('agriculturalProductionMechanization_2.year IN (:...years)', {
          years: ctx.request.body['year'],
        });
    } else {
      filterQuery =
        await this._agriculturalProductionMechanization_2_Repository.createQueryBuilder(
          'agriculturalProductionMechanization_2'
        );
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
      filterQuery.take(ctx.request.body['offset']);
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
  @route('/categoryOutputValueByYears')
  @POST()
  @before(inject(AuthenticationMiddleware))
  async categoryOutputValueByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number().required(),
        offset: number().required(),
      })
    );
    let filterQuery: SelectQueryBuilder<CategoryGrossOutput_5> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._categoryGrossOutput_5_Repository
        .createQueryBuilder('categoryGrossOutput_5')
        .where('categoryGrossOutput_5.year IN (:...years)', {
          years: ctx.request.body['year'],
        });
    } else {
      filterQuery =
        await this._categoryGrossOutput_5_Repository.createQueryBuilder(
          'categoryGrossOutput_5'
        );
    }

    // 符合查询条件数量
    const categoryGrossOutput_5Count: Number = await filterQuery.getCount();

    // 查询结果为空
    if (!categoryGrossOutput_5Count) {
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
    const repCategoryGrossOutput_5: CategoryGrossOutput_5[] =
      await filterQuery.getMany();
    const CategoryGrossOutput_5s: object[] = [];
    await Promise.all(
      repCategoryGrossOutput_5.map(async (item: CategoryGrossOutput_5) => {
        CategoryGrossOutput_5s.push(item.toJSON());
      })
    );
    ctx.body = {
      data: CategoryGrossOutput_5s,
      count: categoryGrossOutput_5Count,
    };
    ctx.state = { OK };
  }
  @route('/agriculturalProductionByYears')
  @POST()
  @before(inject(AuthenticationMiddleware))
  async agriculturalProductionByYears(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: array().required(),
        limit: number().required(),
        offset: number().required(),
      })
    );
    let filterQuery: SelectQueryBuilder<MajorAgriculturalProducts_6> = null;
    if (ctx.request.body['year'].length) {
      filterQuery = await this._majorAgriculturalProducts_6_Repository
        .createQueryBuilder('majorAgriculturalProducts_6')
        .where('majorAgriculturalProducts_6.year IN (:...years)', {
          years: ctx.request.body['year'],
        });
    } else {
      filterQuery =
        await this._majorAgriculturalProducts_6_Repository.createQueryBuilder(
          'majorAgriculturalProducts_6'
        );
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
}
