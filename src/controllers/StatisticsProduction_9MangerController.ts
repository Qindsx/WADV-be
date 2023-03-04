import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CONFLICT } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getConnection, In, SelectQueryBuilder } from 'typeorm';
import { array, assert, number, object, string } from '@hapi/joi';
import AuthenticationMiddleware, {
  OptionalAuthenticationMiddleware,
} from '../middleware/AuthenticationMiddleware';
import { uniq } from 'lodash/array';

import { StatisticsProduction_9 } from '../entities/StatisticsProduction_9';
import StatisticsProduction_9_Repository from '../repositories/StatisticsProduction_9_Repository';

@route('/api/agriculturalProduction/manger')
export default class CategoryGrossOutput_5MangerController {
  private _statisticsProduction_9_Repository: StatisticsProduction_9_Repository;
  constructor({ connection }: { connection: Connection }) {
    this._statisticsProduction_9_Repository = connection.getCustomRepository(
      StatisticsProduction_9_Repository
    );
  }

  /**  牧渔、茶叶和水果生产情况   */
  @route('/otherProductionSituationByYears')
  @POST()
  @before(inject(AuthenticationMiddleware))
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

  /**
   *
   * @param ctx
   *  description: 添加牧渔、茶叶和水果生产情况
   */
  @route('/addOtherProductionSituation')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async addCropProduction(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        data: array()
          .items({
            yearendStockAnimals: number().required(),
            cowsBreed: number().required(),
            beefCattle: number().required(),
            horses: number().required(),
            donkeys: number().required(),
            mutes: number().required(),
            yearendSheep: number().required(),
            yearendHogs: number().required(),
            femalHogs: number().required(),
            slaughteredFattenedHogs: string().required(),
            slaughteredCattle: string().required(),
            slaughteredSheep: string().required(),
            slaughteredPoultry: string().required(),
            milk: number().required(),
            honey: number().required(),
            eggs: number().required(),
            shrimpsCultured: number().required(),
            shrimpsCaught: number().required(),
            freshCulturedArea: number().required(),
            aquaticProducts: number().required(),
            shrimpsArtificially: number().required(),
            fishCaught: number().required(),
            otherCaught: number().required(),
            fishArtificiallyAll: number().required(),
            fishArtificially: number().required(),
            fishCaughtAll: number().required(),
            otherArtificially: number().required(),
            fishCultured: number().required(),
            fishCulturedAll: number().required(),
            otherCultured: number().required(),
            shellfhshArtificially: number().required(),
            paddyCulturedArea: number().required(),
            proliferationArtificiallyArea: number().required(),
            shellfhshCaught: number().required(),
            shellfhshCultured: number().required(),
            fruitOutputAll: number().required(),
            greenTea: number().required(),
            otherTea: number().required(),
            kiwiFruit: number().required(),
            citrus: number().required(),
            grapes: number().required(),
            whiteTea: number().required(),
            citrusArea: number().required(),
            kiwiArea: number().required(),
            peachsArea: number().required(),
            grapesArea: number().required(),
            peaches: number().required(),
            pearsArea: number().required(),
            pears: number().required(),
            pickedArea: number().required(),
            persimmons: number().required(),
            teaOutputAll: number().required(),
            teaPlantationArea: number().required(),
            wulongTea: number().required(),
            yearendOrchardArea: number().required(),
            year: string().required(),
          })
          .required(),
      })
    );

    //  year数组
    const years = ctx.request.body['data'].map((item) => item.year);

    // 判断添加的年份是否存在
    const isYearExistData = await this._statisticsProduction_9_Repository.find({
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
      .into(StatisticsProduction_9)
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
   *  description: 更新牧渔、茶叶和水果生产情况
   *                  年份无法修改，需要在前端控制，但仍需要传入来作为更新条件
   */
  @route('/updeteOtherProductionSituation')
  @POST()
  @before([inject(AuthenticationMiddleware)])
  async updeteProductionValue(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        year: string().required(),
        data: object({
          yearendStockAnimals: number().required(),
          cowsBreed: number().required(),
          beefCattle: number().required(),
          horses: number().required(),
          donkeys: number().required(),
          mutes: number().required(),
          yearendSheep: number().required(),
          yearendHogs: number().required(),
          femalHogs: number().required(),
          slaughteredFattenedHogs: string().required(),
          slaughteredCattle: string().required(),
          slaughteredSheep: string().required(),
          slaughteredPoultry: string().required(),
          milk: number().required(),
          honey: number().required(),
          eggs: number().required(),
          shrimpsCultured: number().required(),
          shrimpsCaught: number().required(),
          freshCulturedArea: number().required(),
          aquaticProducts: number().required(),
          shrimpsArtificially: number().required(),
          fishCaught: number().required(),
          otherCaught: number().required(),
          fishArtificiallyAll: number().required(),
          fishArtificially: number().required(),
          fishCaughtAll: number().required(),
          otherArtificially: number().required(),
          fishCultured: number().required(),
          fishCulturedAll: number().required(),
          otherCultured: number().required(),
          shellfhshArtificially: number().required(),
          paddyCulturedArea: number().required(),
          proliferationArtificiallyArea: number().required(),
          shellfhshCaught: number().required(),
          shellfhshCultured: number().required(),
          fruitOutputAll: number().required(),
          greenTea: number().required(),
          otherTea: number().required(),
          kiwiFruit: number().required(),
          citrus: number().required(),
          grapes: number().required(),
          whiteTea: number().required(),
          citrusArea: number().required(),
          kiwiArea: number().required(),
          peachsArea: number().required(),
          grapesArea: number().required(),
          peaches: number().required(),
          pearsArea: number().required(),
          pears: number().required(),
          pickedArea: number().required(),
          persimmons: number().required(),
          teaOutputAll: number().required(),
          teaPlantationArea: number().required(),
          wulongTea: number().required(),
          yearendOrchardArea: number().required(),
        }).required(),
      })
    );
    const updeteRes = await getConnection()
      .createQueryBuilder()
      .update(StatisticsProduction_9)
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
   *  description: 删除牧渔、茶叶和水果生产情况
   */
  @route('/deleteOtherProductionSituation')
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
      .from(StatisticsProduction_9, 'statisticsProduction_9')
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
      .from(StatisticsProduction_9)
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
