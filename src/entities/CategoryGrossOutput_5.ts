import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category_gross_output_5', { schema: 'agricultural_statistics' })
export class CategoryGrossOutput_5 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'cereal', nullable: true, comment: '谷物' })
  cereal: number | null;

  @Column('int', { name: 'beans', nullable: true, comment: '豆类' })
  beans: number | null;

  @Column('int', { name: 'cotton', nullable: true, comment: '棉花' })
  cotton: number | null;

  @Column('int', { name: 'oil_crops', nullable: true, comment: '油料' })
  oilCrops: number | null;

  @Column('int', { name: 'fiber_crops', nullable: true, comment: '麻类' })
  fiberCrops: number | null;

  @Column('int', { name: 'sugar_crops', nullable: true, comment: '糖料' })
  sugarCrops: number | null;

  @Column('int', { name: 'tobacco', nullable: true, comment: '烟草' })
  tobacco: number | null;

  @Column('int', { name: 'herb_crops', nullable: true, comment: '药材' })
  herbCrops: number | null;

  @Column('int', { name: 'tuber_crops', nullable: true, comment: '薯类' })
  tuberCrops: number | null;

  @Column('int', { name: 'vagetable', nullable: true, comment: '蔬菜和菌子' })
  vagetable: number | null;

  @Column('int', { name: 'tea_fruit', nullable: true, comment: '茶桑果' })
  teaFruit: number | null;

  @Column('int', { name: 'flower', nullable: true, comment: '花卉园艺' })
  flower: number | null;

  @Column('int', { name: 'other_crops', nullable: true, comment: '其他作物' })
  otherCrops: number | null;

  @Column('int', {
    name: 'wild_plants',
    nullable: true,
    comment: '采集野生植物',
  })
  wildPlants: number | null;

  @Column('int', { name: 'forestry', nullable: true, comment: '林业产值' })
  forestry: number | null;

  @Column('int', {
    name: 'animal_husbandry',
    nullable: true,
    comment: '牧业产值',
  })
  animalHusbandry: number | null;

  @Column('int', { name: 'fishery', nullable: true, comment: '渔业产值' })
  fishery: number | null;

  @Column('int', {
    name: 'Industrial_service',
    nullable: true,
    comment: '服务业产值',
  })
  industrialService: number | null;

  @Column('varchar', { name: 'year', nullable: true, length: 255 })
  year: string | null;

  toJSON() {
    return {
      cereal: this.cereal,
      beans: this.beans,
      cotton: this.cotton,
      oilCrops: this.oilCrops,
      fishery: this.fishery,
      fiberCrops: this.fiberCrops,
      sugarCrops: this.sugarCrops,
      tobacco: this.tobacco,
      herbCrops: this.herbCrops,
      tuberCrops: this.tuberCrops,
      vagetable: this.vagetable,
      teaFruit: this.teaFruit,
      flower: this.flower,
      otherCrops: this.otherCrops,
      wildPlants: this.wildPlants,
      forestry: this.forestry,
      animalHusbandry: this.animalHusbandry,
      industrialService: this.industrialService,
      year: this.year,
    };
  }
}
