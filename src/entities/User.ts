import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('user', { schema: 'agricultural_statistics' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: string;

  @Column('varchar', { name: 'username', comment: '用户名', length: 255 })
  username: string;

  @Column('varchar', {
    name: 'password',
    comment: '密码(md5加密)',
    length: 255,
  })
  password: string;

  toUserJSON(accessToken: string) {
    return {
      username: this.username,
      accessToken,
    };
  }

  // toProfileJSON(following: boolean) {
  //   return {
  //     username: this.username,
  //     following,
  //   };
  // }
}
