import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crops_sown_output_hectare_7', { schema: 'agricultural_statistics' })
export class CropsSownOutputHectare_7 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'grain_crops', nullable: true, comment: '粮食作物' })
  grainCrops: number | null;

  @Column('int', {
    name: 'summer_grain_crops',
    nullable: true,
    comment: '夏收粮食',
  })
  summerGrainCrops: number | null;

  @Column('int', { name: 'wheat', nullable: true, comment: '小麦' })
  wheat: number | null;

  @Column('int', { name: 'soybean_summer', nullable: true, comment: '豆类' })
  soybeanSummer: number | null;

  @Column('int', {
    name: 'tuber_crops_summer',
    nullable: true,
    comment: '薯类',
  })
  tuberCropsSummer: number | null;

  @Column('int', {
    name: 'other_cereals_summer',
    nullable: true,
    comment: '其他小谷物-夏',
  })
  otherCerealsSummer: number | null;

  @Column('int', { name: 'early_season_rice', nullable: true, comment: '早稻' })
  earlySeasonRice: number | null;

  @Column('int', {
    name: 'autumn_grain_crops',
    nullable: true,
    comment: '秋收粮食',
  })
  autumnGrainCrops: number | null;

  @Column('int', { name: 'paddy_rice', nullable: true, comment: '稻谷' })
  paddyRice: number | null;

  @Column('int', { name: 'mid_season_rice', nullable: true, comment: '中稻' })
  midSeasonRice: number | null;

  @Column('int', {
    name: 'double_rotation_rice',
    nullable: true,
    comment: '双季晚稻',
  })
  doubleRotationRice: number | null;

  @Column('int', { name: 'corn', nullable: true, comment: '玉米' })
  corn: number | null;

  @Column('int', { name: 'soybean_autumn', nullable: true, comment: '豆类' })
  soybeanAutumn: number | null;

  @Column('int', {
    name: 'tuber_crops_autumn',
    nullable: true,
    comment: '薯类',
  })
  tuberCropsAutumn: number | null;

  @Column('int', {
    name: 'other_cereals_autumn',
    nullable: true,
    comment: '其他小谷物-秋',
  })
  otherCerealsAutumn: number | null;

  @Column('int', { name: 'cotton', nullable: true, comment: '棉花' })
  cotton: number | null;

  @Column('int', { name: 'oil_berain', nullable: true, comment: '油料' })
  oilBerain: number | null;

  @Column('int', { name: 'rape_seeds', nullable: true, comment: '油菜籽' })
  rapeSeeds: number | null;

  @Column('int', { name: 'peanuts', nullable: true, comment: '花生' })
  peanuts: number | null;

  @Column('int', { name: 'sesame', nullable: true, comment: '芝麻' })
  sesame: number | null;

  @Column('int', { name: 'fiber_crops', nullable: true, comment: '麻类' })
  fiberCrops: number | null;

  @Column('int', { name: 'sugar_crops', nullable: true, comment: '糖料' })
  sugarCrops: number | null;

  @Column('int', { name: 'tobacco', nullable: true, comment: '烟草' })
  tobacco: number | null;

  @Column('int', { name: 'herb_crops', nullable: true, comment: '药材' })
  herbCrops: number | null;

  @Column('int', { name: 'vagetable', nullable: true, comment: '蔬菜' })
  vagetable: number | null;

  @Column('int', { name: 'melons', nullable: true, comment: '瓜果' })
  melons: number | null;

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
