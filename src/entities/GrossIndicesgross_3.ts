import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gross_indicesgross_3', { schema: 'agricultural_statistics' })
export class GrossIndicesgross_3 {
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
    name: 'gross_output_value',
    nullable: true,
    comment: '农林牧渔总产值',
    precision: 22,
  })
  grossOutputValue: number | null;

  @Column('double', {
    name: 'indices_gross_total',
    nullable: true,
    comment: '农林渔牧总产值指数',
    precision: 22,
  })
  indicesGrossTotal: number | null;

  @Column('double', {
    name: 'indices_gross_farming',
    nullable: true,
    comment: '农业',
    precision: 22,
  })
  indicesGrossFarming: number | null;

  @Column('double', {
    name: 'indices_gross_forestry',
    nullable: true,
    comment: '林业',
    precision: 22,
  })
  indicesGrossForestry: number | null;

  @Column('double', {
    name: 'indices_gross_husbandry',
    nullable: true,
    comment: '牧业',
    precision: 22,
  })
  indicesGrossHusbandry: number | null;

  @Column('double', {
    name: 'indices_gross_fishery',
    nullable: true,
    comment: '渔业',
    precision: 22,
  })
  indicesGrossFishery: number | null;

  toJSON() {
    return {
      grossOutputValue: this.grossOutputValue,
      indicesGrossTotal: this.indicesGrossTotal,
      indicesGrossFarming: this.indicesGrossFarming,
      indicesGrossForestry: this.indicesGrossForestry,
      indicesGrossHusbandry: this.indicesGrossHusbandry,
      indicesGrossFishery: this.indicesGrossFishery,
      year: this.year,
    };
  }
}
