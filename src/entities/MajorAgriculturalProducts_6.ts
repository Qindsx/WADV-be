import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('major_agricultural_products_6', { schema: 'agricultural_statistics' })
export class MajorAgriculturalProducts_6 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'year',
    nullable: true,
    comment: '年份',
    length: 255,
  })
  year: string | null;

  @Column('double', {
    name: 'grains',
    nullable: true,
    comment: '粮食',
    precision: 22,
  })
  grains: number | null;

  @Column('double', {
    name: 'cotton',
    nullable: true,
    comment: '棉花',
    precision: 22,
  })
  cotton: number | null;

  @Column('double', {
    name: 'oil_bearing',
    nullable: true,
    comment: '油料',
    precision: 22,
  })
  oilBearing: number | null;

  @Column('double', {
    name: 'vagetables',
    nullable: true,
    comment: '蔬菜',
    precision: 22,
  })
  vagetables: number | null;

  @Column('double', {
    name: 'fruit',
    nullable: true,
    comment: '水果',
    precision: 22,
  })
  fruit: number | null;

  @Column('double', {
    name: 'slaughtered_hogs',
    nullable: true,
    comment: '生猪出栏',
    precision: 22,
  })
  slaughteredHogs: number | null;

  @Column('double', {
    name: 'slaughtered_poultry',
    nullable: true,
    comment: '家禽出笼',
    precision: 22,
  })
  slaughteredPoultry: number | null;

  @Column('double', {
    name: 'eggs',
    nullable: true,
    comment: '禽蛋产量',
    precision: 22,
  })
  eggs: number | null;

  @Column('double', {
    name: 'milk',
    nullable: true,
    comment: '牛奶',
    precision: 22,
  })
  milk: number | null;

  @Column('double', {
    name: 'aquatic_products',
    nullable: true,
    comment: '水产品',
    precision: 22,
  })
  aquaticProducts: number | null;

  toJSON() {
    return {
      grains: this.grains,
      cotton: this.cotton,
      oilBearing: this.oilBearing,
      vagetables: this.vagetables,
      fruit: this.fruit,
      slaughteredHogs: this.slaughteredHogs,
      slaughteredPoultry: this.slaughteredPoultry,
      eggs: this.eggs,
      milk: this.milk,
      aquaticProducts: this.aquaticProducts,
      year: this.year,
    };
  }
}
