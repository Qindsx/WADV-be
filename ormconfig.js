module.exports = {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'agricultural_statistics',
      synchronize: true,
      logging: false,
      entities: [__dirname + "/entitires/*.ts"],
      migrations: [],
      subscribers: [],
    };
