import * as Koa from 'koa';
import { createContainer, AwilixContainer, asValue } from 'awilix';
import { scopePerRequest, loadControllers } from 'awilix-koa';
import { createConnection, Connection } from 'typeorm';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'kcors';
import * as helmet from 'koa-helmet';

import errorMiddleware from './middleware/ErrorMiddleware';
import Logger from './logger';
import SecurityService from './services/SecurityService';
import { AppDataSource } from './data-source';

// 导入实体
import { User } from './entities/User';
import { RuralInfrastructure_1 } from './entities/RuralInfrastructure_1';
import { AgriculturalProductionMechanization_2 } from './entities/AgriculturalProductionMechanization_2';
import { GrossIndicesgross_3 } from './entities/GrossIndicesgross_3';
import { GrossOutputCompoosition_4 } from './entities/GrossOutputCompoosition_4';
import { CategoryGrossOutput_5 } from './entities/CategoryGrossOutput_5';
import { MajorAgriculturalProducts_6 } from './entities/MajorAgriculturalProducts_6';
import { CropsSownOutputHectare_7 } from './entities/CropsSownOutputHectare_7';
import { ForproductsForestryOutput_8 } from './entities/ForproductsForestryOutput_8';
import { StatisticsProduction_9 } from './entities/StatisticsProduction_9';
// const user = new User();

export async function connectWithRetry(): Promise<Connection> {
  try {
    // return await createConnection({
    //   type: 'mysql',
    //   url: process.env.TYPEORM_URL,
    //   entities: [__dirname + '/entities/*.{ts,js}'],
    // });

    return await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'agricultural_statistics',
      synchronize: true,
      logging: false,
      entities: [
        User,
        RuralInfrastructure_1,
        AgriculturalProductionMechanization_2,
        GrossIndicesgross_3,
        GrossOutputCompoosition_4,
        CategoryGrossOutput_5,
        MajorAgriculturalProducts_6,
        CropsSownOutputHectare_7,
        ForproductsForestryOutput_8,
        StatisticsProduction_9,
      ],
      migrations: [],
      subscribers: [],
    });
  } catch (err) {
    Logger.error(
      'failed to connect to db on startup - retrying in 5 seconds ',
      err
    );
    await new Promise((resolve: any) => setTimeout(resolve, 5000));
    return connectWithRetry();
  }
}

export async function createApp(): Promise<Koa> {
  const app: Koa = new Koa();

  const securityService: SecurityService = new SecurityService();
  const connection: Connection = await connectWithRetry();

  Logger.info('successfully established db connection');

  const container: AwilixContainer = createContainer().register({
    securityService: asValue(securityService),
    connection: asValue(connection),
  });

  app
    .use(cors())
    .use(bodyParser())
    .use(helmet())
    .use(scopePerRequest(container))
    .use(errorMiddleware)
    .use(loadControllers('controllers/*.{ts,js}', { cwd: __dirname }));

  return app;
}
