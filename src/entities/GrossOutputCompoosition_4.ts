import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gross_output_compoosition_4', { schema: 'agricultural_statistics' })
export class GrossOutputCompoosition_4 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'total', nullable: true, comment: '农林牧渔业总计' })
  total: number | null;

  @Column('int', { name: 'farming', nullable: true, comment: '农业' })
  farming: number | null;

  @Column('int', { name: 'forestry', nullable: true, comment: '林业' })
  forestry: number | null;

  @Column('int', { name: 'husbandry', nullable: true, comment: '牧业' })
  husbandry: number | null;

  @Column('int', { name: 'fishery', nullable: true, comment: '渔业' })
  fishery: number | null;

  @Column('int', {
    name: 'Industrial_service',
    nullable: true,
    comment: '农林牧渔服务业',
  })
  industrialService: number | null;

  @Column('varchar', {
    name: 'year',
    nullable: true,
    comment: '年份',
    length: 255,
  })
  year: string | null;

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
