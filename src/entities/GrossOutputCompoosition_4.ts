import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gross_output_compoosition_4', { schema: 'agricultural_statistics' })
export class GrossOutputCompoosition_4 {
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
    name: 'total',
    nullable: true,
    comment: '农林牧渔业总计',
    precision: 22,
  })
  total: number | null;

  @Column('double', {
    name: 'farming',
    nullable: true,
    comment: '农业',
    precision: 22,
  })
  farming: number | null;

  @Column('double', {
    name: 'forestry',
    nullable: true,
    comment: '林业',
    precision: 22,
  })
  forestry: number | null;

  @Column('double', {
    name: 'husbandry',
    nullable: true,
    comment: '牧业',
    precision: 22,
  })
  husbandry: number | null;

  @Column('double', {
    name: 'fishery',
    nullable: true,
    comment: '渔业',
    precision: 22,
  })
  fishery: number | null;

  @Column('double', {
    name: 'Industrial_service',
    nullable: true,
    comment: '农林牧渔服务业',
    precision: 22,
  })
  industrialService: number | null;

  toJSON() {
    return {
      total: this.total,
      farming: this.farming,
      forestry: this.forestry,
      husbandry: this.husbandry,
      fishery: this.fishery,
      industrialService: this.industrialService,
      year: this.year,
    };
  }
}
