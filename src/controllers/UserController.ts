import { route, GET, POST, before, inject, PUT } from 'awilix-koa';
import { OK, CREATED, UNAUTHORIZED } from 'http-status-codes';
import { Context } from 'koa';
import { Connection, getCustomRepository } from 'typeorm';
import { assert, object, string } from '@hapi/joi';

import { User } from '../entities/User';
import UserRepository from '../repositories/UserRepository';
import SecurityService from '../services/SecurityService';
import AuthenticationMiddleware from '../middleware/AuthenticationMiddleware';
import logger from '../logger';

@route('/api')
export default class UserController {
  private _userRepository: UserRepository;
  private _securityService: SecurityService;
  // Any Dependencies registered to the container can be injected here
  constructor({
    connection,
    securityService,
  }: {
    connection: Connection;
    securityService: SecurityService;
  }) {
    this._userRepository = connection.getCustomRepository(UserRepository);
    this._securityService = securityService;
  }

  // 注册
  @route('/users/register')
  @POST()
  async register(ctx: Context) {
    logger.info(JSON.stringify(ctx.request.body, null, 4));

    assert(
      ctx.request.body,
      object({
        username: string().min(5).max(30).required(),
        password: string().min(5).max(30).required(),
      })
    );

    const user: User = new User();
    Object.assign(user, ctx.request.body);
    SecurityService.hashPassword(user);
    await this._userRepository.save(user);

    const token: string = this._securityService.generateToken(user);

    ctx.body = { user: user.toUserJSON(token) };
    ctx.status = CREATED;
  }

  @route('/users/login')
  @POST()
  async login(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        username: string().required(),
        password: string().required(),
      })
    );
    logger.info(JSON.stringify(ctx.request.body, null, 4));
    const { password, username }: { password?: string; username?: string } =
      ctx.request.body;
    const user: User | undefined = await this._userRepository.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      ctx.throw(UNAUTHORIZED, 'Unauthorized');
    }

    if (!SecurityService.verifyHash(password, user.password)) {
      ctx.throw(UNAUTHORIZED, 'Unauthorized');
    }

    const token: string = this._securityService.generateToken(user);
    const refreshToken: string =
      this._securityService.generateRefreshToken(user);

    const user1 = this._securityService.decodetoken(
      ctx.request.body['refreshToken']
    );
    logger.info(JSON.stringify(user1, null, 2));

    ctx.body = {
      messagee: '登录成功',
      data: {
        ...user.toUserJSON(token),
        roles: ['admin'],
        expires: 30 * 1000,
        refreshToken,
      },
    };
    ctx.status = OK;
  }

  @route('/uesrs/refreshtoken')
  @POST()
  async refreshtoken(ctx: Context) {
    assert(
      ctx.request.body,
      object({
        refreshToken: string().required(),
      })
    );

    try {
      this._securityService.verify_refreshToken(
        ctx.request.body['refreshToken']
      );
    } catch (error) {
      ctx.throw(UNAUTHORIZED, 'Unauthorized');
    }
    // 解密token
    const user = this._securityService.decodetoken(
      ctx.request.body['refreshToken']
    );
    const user1 = this._securityService.decodetoken(
      ctx.request.body['refreshToken']
    );
    logger.info(JSON.stringify(user1, null, 2));

    // 重新获取token
    // const token: string = this._securityService.generateToken(user);
    // const refreshToken: string =
    //   this._securityService.generateRefreshToken(user);
  }
}
