import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category_gross_output_5', { schema: 'agricultural_statistics' })
export class CategoryGrossOutput_5 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'year', nullable: true, length: 255 })
  year: string | null;

  @Column('double', {
    name: 'cereal',
    nullable: true,
    comment: '谷物',
    precision: 22,
  })
  cereal: number | null;

  @Column('double', {
    name: 'beans',
    nullable: true,
    comment: '豆类',
    precision: 22,
  })
  beans: number | null;

  @Column('double', {
    name: 'cotton',
    nullable: true,
    comment: '棉花',
    precision: 22,
  })
  cotton: number | null;

  @Column('double', {
    name: 'oil_crops',
    nullable: true,
    comment: '油料',
    precision: 22,
  })
  oilCrops: number | null;

  @Column('double', {
    name: 'fiber_crops',
    nullable: true,
    comment: '麻类',
    precision: 22,
  })
  fiberCrops: number | null;

  @Column('double', {
    name: 'sugar_crops',
    nullable: true,
    comment: '糖料',
    precision: 22,
  })
  sugarCrops: number | null;

  @Column('double', {
    name: 'tobacco',
    nullable: true,
    comment: '烟草',
    precision: 22,
  })
  tobacco: number | null;

  @Column('double', {
    name: 'herb_crops',
    nullable: true,
    comment: '药材',
    precision: 22,
  })
  herbCrops: number | null;

  @Column('double', {
    name: 'tuber_crops',
    nullable: true,
    comment: '薯类',
    precision: 22,
  })
  tuberCrops: number | null;

  @Column('double', {
    name: 'vagetable',
    nullable: true,
    comment: '蔬菜和菌子',
    precision: 22,
  })
  vagetable: number | null;

  @Column('double', {
    name: 'tea_fruit',
    nullable: true,
    comment: '茶桑果',
    precision: 22,
  })
  teaFruit: number | null;

  @Column('double', {
    name: 'flower',
    nullable: true,
    comment: '花卉园艺',
    precision: 22,
  })
  flower: number | null;

  @Column('double', {
    name: 'other_crops',
    nullable: true,
    comment: '其他作物',
    precision: 22,
  })
  otherCrops: number | null;

  @Column('double', {
    name: 'wild_plants',
    nullable: true,
    comment: '采集野生植物',
    precision: 22,
  })
  wildPlants: number | null;

  @Column('double', {
    name: 'farming',
    nullable: true,
    comment: '农业产值',
    precision: 22,
  })
  farming: number | null;

  @Column('double', {
    name: 'forestry',
    nullable: true,
    comment: '林业产值',
    precision: 22,
  })
  forestry: number | null;

  @Column('double', {
    name: 'animal_husbandry',
    nullable: true,
    comment: '牧业产值',
    precision: 22,
  })
  animalHusbandry: number | null;

  @Column('double', {
    name: 'fishery',
    nullable: true,
    comment: '渔业产值',
    precision: 22,
  })
  fishery: number | null;

  @Column('double', {
    name: 'Industrial_service',
    nullable: true,
    comment: '服务业产值',
    precision: 22,
  })
  industrialService: number | null;

  @Column('boolean', {
    name: 'isDel',
    nullable: true,
    comment: '能否删除',
    default: '1',
  })
  isDel: number | null;

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
      farming: this.farming,
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
