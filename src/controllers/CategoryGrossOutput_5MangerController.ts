import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, In, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';

import { CategoryGrossOutput_5 } from '../entities/CategoryGrossOutput_5';
import CategoryGrossOutput_5_Repository from '../repositories/CategoryGrossOutput_5_Repository';
import logger from '../logger';

@route('/api/agriculturalInputsOutputs/manger')
export default class CategoryGrossOutput_5MangerController {
  private _categoryGrossOutput_5_Repository: CategoryGrossOutput_5_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._categoryGrossOutput_5_Repository = connection.getCustomRepository(
      CategoryGrossOutput_5_Repository
    );
  }
  /** 农林牧渔业分类总产值   */
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
        })
        .orderBy('categoryGrossOutput_5.year');
    } else {
      filterQuery = await this._categoryGrossOutput_5_Repository
        .createQueryBuilder('categoryGrossOutput_5')
        .orderBy('categoryGrossOutput_5.year');
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

  /**
   *
   * @param ctx
   *  description: 添加农林牧渔业分类总产值
   */
  @route('/addCategoryOutputValue')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addCategoryOutputValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            farming: number().required(),
            forestry: number().required(),
            animalHusbandry: number().required(),
            industrialService: number().required(),
            fishery: number().required(),
            beans: number().required(),
            cereal: number().required(),
            cotton: number().required(),
            fiberCrops: number().required(),
            flower: number().required(),
            herbCrops: number().required(),
            oilCrops: number().required(),
            otherCrops: number().required(),
            sugarCrops: number().required(),
            teaFruit: number().required(),
            tobacco: number().required(),
            tuberCrops: number().required(),
            vagetable: number().required(),
            wildPlants: number().required(),
            year: string().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData = await this._categoryGrossOutput_5_Repository.find({
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
      .into(CategoryGrossOutput_5)
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
   *  description: 更新农林牧渔业分类总产值
   *                  年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   */
  @route('/updeteCategoryOutputValue')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          farming: number().required(),
          forestry: number().required(),
          animalHusbandry: number().required(),
          industrialService: number().required(),
          fishery: number().required(),
          beans: number().required(),
          cereal: number().required(),
          cotton: number().required(),
          fiberCrops: number().required(),
          flower: number().required(),
          herbCrops: number().required(),
          oilCrops: number().required(),
          otherCrops: number().required(),
          sugarCrops: number().required(),
          teaFruit: number().required(),
          tobacco: number().required(),
          tuberCrops: number().required(),
          vagetable: number().required(),
          wildPlants: number().required(),
        }).required(),
      })
    );
    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(CategoryGrossOutput_5)
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
   *  description: 删除农林牧渔业分类总产值
   */
  @route('/deleteCategoryOutputValue')
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
      .from(CategoryGrossOutput_5, 'categoryGrossOutput_5')
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
      .from(CategoryGrossOutput_5)
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
