import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crops_sown_output_hectare_7', { schema: 'agricultural_statistics' })
export class CropsSownOutputHectare_7 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'classify',
    nullable: true,
    comment: '分类：sown|output|per hectare',
    length: 255,
  })
  classify: string | null;

  @Column('varchar', {
    name: 'year',
    nullable: true,
    comment: '年份',
    length: 255,
  })
  year: string | null;

  @Column('double', {
    name: 'grain_crops',
    nullable: true,
    comment: '粮食作物',
    precision: 22,
  })
  grainCrops: number | null;

  @Column('double', {
    name: 'summer_grain_crops',
    nullable: true,
    comment: '夏收粮食',
    precision: 22,
  })
  summerGrainCrops: number | null;

  @Column('double', {
    name: 'wheat',
    nullable: true,
    comment: '小麦',
    precision: 22,
  })
  wheat: number | null;

  @Column('double', {
    name: 'soybean_summer',
    nullable: true,
    comment: '豆类',
    precision: 22,
  })
  soybeanSummer: number | null;

  @Column('double', {
    name: 'tuber_crops_summer',
    nullable: true,
    comment: '薯类',
    precision: 22,
  })
  tuberCropsSummer: number | null;

  @Column('double', {
    name: 'other_cereals_summer',
    nullable: true,
    comment: '其他小谷物-夏',
    precision: 22,
  })
  otherCerealsSummer: number | null;

  @Column('double', {
    name: 'early_season_rice',
    nullable: true,
    comment: '早稻',
    precision: 22,
  })
  earlySeasonRice: number | null;

  @Column('double', {
    name: 'autumn_grain_crops',
    nullable: true,
    comment: '秋收粮食',
    precision: 22,
  })
  autumnGrainCrops: number | null;

  @Column('double', {
    name: 'paddy_rice',
    nullable: true,
    comment: '稻谷',
    precision: 22,
  })
  paddyRice: number | null;

  @Column('double', {
    name: 'mid_season_rice',
    nullable: true,
    comment: '中稻',
    precision: 22,
  })
  midSeasonRice: number | null;

  @Column('double', {
    name: 'double_rotation_rice',
    nullable: true,
    comment: '双季晚稻',
    precision: 22,
  })
  doubleRotationRice: number | null;

  @Column('double', {
    name: 'corn',
    nullable: true,
    comment: '玉米',
    precision: 22,
  })
  corn: number | null;

  @Column('double', {
    name: 'soybean_autumn',
    nullable: true,
    comment: '豆类',
    precision: 22,
  })
  soybeanAutumn: number | null;

  @Column('double', {
    name: 'tuber_crops_autumn',
    nullable: true,
    comment: '薯类',
    precision: 22,
  })
  tuberCropsAutumn: number | null;

  @Column('double', {
    name: 'other_cereals_autumn',
    nullable: true,
    comment: '其他小谷物-秋',
    precision: 22,
  })
  otherCerealsAutumn: number | null;

  @Column('double', {
    name: 'cotton',
    nullable: true,
    comment: '棉花',
    precision: 22,
  })
  cotton: number | null;

  @Column('double', {
    name: 'oil_berain',
    nullable: true,
    comment: '油料',
    precision: 22,
  })
  oilBerain: number | null;

  @Column('double', {
    name: 'rape_seeds',
    nullable: true,
    comment: '油菜籽',
    precision: 22,
  })
  rapeSeeds: number | null;

  @Column('double', {
    name: 'peanuts',
    nullable: true,
    comment: '花生',
    precision: 22,
  })
  peanuts: number | null;

  @Column('double', {
    name: 'sesame',
    nullable: true,
    comment: '芝麻',
    precision: 22,
  })
  sesame: number | null;

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
    name: 'vagetable',
    nullable: true,
    comment: '蔬菜',
    precision: 22,
  })
  vagetable: number | null;

  @Column('double', {
    name: 'melons',
    nullable: true,
    comment: '瓜果',
    precision: 22,
  })
  melons: number | null;

  toJSON() {
    return {
      grainCrops: this.grainCrops,
      summerGrainCrops: this.summerGrainCrops,
      wheat: this.wheat,
      soybeanSummer: this.soybeanSummer,
      tuberCropsSummer: this.tuberCropsSummer,
      otherCerealsSummer: this.otherCerealsSummer,
      earlySeasonRice: this.earlySeasonRice,
      autumnGrainCrops: this.autumnGrainCrops,
      paddyRice: this.paddyRice,
      midSeasonRice: this.midSeasonRice,
      doubleRotationRice: this.doubleRotationRice,
      corn: this.corn,
      soybeanAutumn: this.soybeanAutumn,
      tuberCropsAutumn: this.tuberCropsAutumn,
      otherCerealsAutumn: this.otherCerealsAutumn,
      cotton: this.cotton,
      oilBerain: this.oilBerain,
      rapeSeeds: this.rapeSeeds,
      peanuts: this.peanuts,
      sesame: this.sesame,
      fiberCrops: this.fiberCrops,
      sugarCrops: this.sugarCrops,
      tobacco: this.tobacco,
      herbCrops: this.herbCrops,
      vagetable: this.vagetable,
      melons: this.melons,
      // classify: this.classify,
      year: this.year,
    };
  }
}
