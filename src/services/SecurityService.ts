import { pbkdf2Sync, randomBytes } from 'crypto';
import * as jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export interface Claims {
  id: string;
  username: string;
  iat: number;
  exp: number;
}

export default class Security {
  private static _iterations: number = 2048;
  private static _keyLen: number = 32;
  private static _saltLen: number = 16;
  private static _digest: string = 'sha512';
  // private _tokenExp: number = 1000 * 60 * 60 * 2; // token 两小时刷新
  private _secret: string;
  private _refreshSecret;

  constructor() {
    if (!process.env.SECRET) throw Error('could not find secret');
    if (!process.env.REFRESH_SECRET)
      throw Error('could not find refresh secret');
    this._refreshSecret = process.env.REFRESH_SECRET;
    this._secret = process.env.SECRET;
    delete process.env.SECRET;
    delete process.env.REFRESH_SECRET;
  }

  public static hashPassword(user: User): void {
    const salt: string = randomBytes(this._saltLen).toString('hex');
    const hash: string = pbkdf2Sync(
      user.password,
      salt,
      this._iterations,
      this._keyLen,
      this._digest
    ).toString('hex');
    user.password = [salt, hash].join('$');
  }

  public static verifyHash(password: string, key: string): boolean {
    const originalHash: string = key.split('$')[1];
    const salt: string = key.split('$')[0];
    const hash: string = pbkdf2Sync(
      password,
      salt,
      this._iterations,
      this._keyLen,
      this._digest
    ).toString('hex');
    return hash === originalHash;
  }

  public generateToken(user: User): string {
    return jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      this._secret,
      { expiresIn: process.env.TOKEN_TIME }
    );
  }

  public generateRefreshToken(user: User): string {
    return jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      this._refreshSecret,
      { expiresIn: process.env.REFRESH_TOKEN_TIME }
    );
  }

  // 解析token
  public decodetoken(token: string) {
    const decode = jwt.decode(token);
    return decode;
  }

  public verifyToken(token: string): Claims {
    return jwt.verify(token, this._secret) as Claims;
  }

  public verify_refreshToken(refreshToken: string) {
    return jwt.verify(refreshToken, this._refreshSecret);
  }
}
