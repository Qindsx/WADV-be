import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('statistics_production_9', { schema: 'agricultural_statistics' })
export class StatisticsProduction_9 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', {
    name: 'yearend_stock_animals',
    nullable: true,
    comment: '年末大牲畜存栏',
  })
  yearendStockAnimals: number | null;

  @Column('int', {
    name: 'cows_breed',
    nullable: true,
    comment: '良种及改良种乳牛',
  })
  cowsBreed: number | null;

  @Column('int', { name: 'beef_cattle', nullable: true, comment: '肉用牛' })
  beefCattle: number | null;

  @Column('int', { name: 'horses', nullable: true, comment: '马' })
  horses: number | null;

  @Column('int', { name: 'donkeys', nullable: true, comment: '驴' })
  donkeys: number | null;

  @Column('int', { name: 'mutes', nullable: true, comment: '骡' })
  mutes: number | null;

  @Column('int', {
    name: 'yearend_sheep',
    nullable: true,
    comment: '年末羊只数',
  })
  yearendSheep: number | null;

  @Column('double', {
    name: 'yearend_hogs',
    nullable: true,
    comment: '年末牲猪存栏',
    precision: 22,
  })
  yearendHogs: number | null;

  @Column('double', {
    name: 'femal_hogs',
    nullable: true,
    comment: '能繁母猪',
    precision: 22,
  })
  femalHogs: number | null;

  @Column('varchar', {
    name: 'slaughtered_fattened_hogs',
    nullable: true,
    comment: '全年肉猪出栏',
    length: 255,
  })
  slaughteredFattenedHogs: string | null;

  @Column('varchar', {
    name: 'slaughtered_cattle',
    nullable: true,
    comment: '全年出售和自宰肉用牛',
    length: 255,
  })
  slaughteredCattle: string | null;

  @Column('varchar', {
    name: 'slaughtered_sheep',
    nullable: true,
    comment: '自宰肉羊',
    length: 255,
  })
  slaughteredSheep: string | null;

  @Column('varchar', {
    name: 'slaughtered_poultry',
    nullable: true,
    comment: '自宰家禽',
    length: 255,
  })
  slaughteredPoultry: string | null;

  @Column('int', { name: 'milk', nullable: true, comment: '牛奶产量' })
  milk: number | null;

  @Column('int', { name: 'honey', nullable: true, comment: '蜂蜜' })
  honey: number | null;

  @Column('int', { name: 'eggs', nullable: true, comment: '禽蛋产量' })
  eggs: number | null;

  @Column('int', {
    name: 'tea_output_all',
    nullable: true,
    comment: '茶叶总产量',
  })
  teaOutputAll: number | null;

  @Column('int', { name: 'green_tea', nullable: true, comment: '绿茶' })
  greenTea: number | null;

  @Column('int', { name: 'wulong_tea', nullable: true, comment: '清茶' })
  wulongTea: number | null;

  @Column('int', { name: 'white_tea', nullable: true, comment: '白茶' })
  whiteTea: number | null;

  @Column('int', { name: 'other_tea', nullable: true, comment: '其他茶' })
  otherTea: number | null;

  @Column('int', {
    name: 'tea_plantation_area',
    nullable: true,
    comment: '年末茶园面积',
  })
  teaPlantationArea: number | null;

  @Column('int', { name: 'picked_area', nullable: true, comment: '采摘面积' })
  pickedArea: number | null;

  @Column('int', {
    name: 'fruit_output_all',
    nullable: true,
    comment: '水果产量',
  })
  fruitOutputAll: number | null;

  @Column('int', { name: 'peaches', nullable: true, comment: '桃子' })
  peaches: number | null;

  @Column('int', { name: 'citrus', nullable: true, comment: '柑橘' })
  citrus: number | null;

  @Column('int', { name: 'pears', nullable: true, comment: '梨子' })
  pears: number | null;

  @Column('int', { name: 'grapes', nullable: true, comment: '葡萄' })
  grapes: number | null;

  @Column('int', { name: 'persimmons', nullable: true, comment: '葡萄' })
  persimmons: number | null;

  @Column('int', { name: 'kiwi_fruit', nullable: true, comment: '猕猴桃' })
  kiwiFruit: number | null;

  @Column('int', {
    name: 'yearend_orchard_area',
    nullable: true,
    comment: '年末果园面积',
  })
  yearendOrchardArea: number | null;

  @Column('int', { name: 'citrus_area', nullable: true, comment: '柑橘园面积' })
  citrusArea: number | null;

  @Column('int', { name: 'pears_area', nullable: true, comment: '梨园面积' })
  pearsArea: number | null;

  @Column('int', { name: 'grapes_area', nullable: true, comment: '葡萄园面积' })
  grapesArea: number | null;

  @Column('int', { name: 'peachs_area', nullable: true, comment: '桃园面积' })
  peachsArea: number | null;

  @Column('int', { name: 'kiwi_area', nullable: true, comment: '猕猴桃面积' })
  kiwiArea: number | null;

  @Column('int', {
    name: 'aquatic_products',
    nullable: true,
    comment: '水产产量',
  })
  aquaticProducts: number | null;

  @Column('int', {
    name: 'fish_caught_all',
    nullable: true,
    comment: '淡水捕捞产量',
  })
  fishCaughtAll: number | null;

  @Column('int', { name: 'fish_caught', nullable: true, comment: '鱼类捕捞' })
  fishCaught: number | null;

  @Column('int', { name: 'shrimps_caught', nullable: true, comment: '虾蟹类' })
  shrimpsCaught: number | null;

  @Column('int', { name: 'other_caught', nullable: true, comment: '其他类' })
  otherCaught: number | null;

  @Column('int', {
    name: 'fish_artificially_all',
    nullable: true,
    comment: '淡水养殖产量',
  })
  fishArtificiallyAll: number | null;

  @Column('int', {
    name: 'fish_artificially',
    nullable: true,
    comment: '鱼类养殖',
  })
  fishArtificially: number | null;

  @Column('int', {
    name: 'shrimps_artificially',
    nullable: true,
    comment: '虾蟹养殖',
  })
  shrimpsArtificially: number | null;

  @Column('int', {
    name: 'other_artificially',
    nullable: true,
    comment: '其他类',
  })
  otherArtificially: number | null;

  @Column('int', {
    name: 'fish_cultured_all',
    nullable: true,
    comment: '增值养殖产量',
  })
  fishCulturedAll: number | null;

  @Column('int', { name: 'fish_cultured', nullable: true, comment: '鱼类增殖' })
  fishCultured: number | null;

  @Column('int', {
    name: 'shellfhsh_cultured',
    nullable: true,
    comment: '贝类增值',
  })
  shellfhshCultured: number | null;

  @Column('int', {
    name: 'other_cultured',
    nullable: true,
    comment: '其他增值类',
  })
  otherCultured: number | null;

  @Column('int', {
    name: 'fresh_cultured_area',
    nullable: true,
    comment: '淡水养殖面积',
  })
  freshCulturedArea: number | null;

  @Column('int', {
    name: 'paddy_cultured_area',
    nullable: true,
    comment: '稻田养殖面积',
  })
  paddyCulturedArea: number | null;

  @Column('int', {
    name: 'proliferation_artificially_area',
    nullable: true,
    comment: '增值养殖面积',
  })
  proliferationArtificiallyArea: number | null;

  @Column('varchar', { name: 'year', comment: '年份', length: 255 })
  year: string;

  toJSON() {
    return {
      yearendStockAnimals: this.yearendStockAnimals,
      cowsBreed: this.cowsBreed,
      beefCattle: this.beefCattle,
      horses: this.horses,
      donkeys: this.donkeys,
      mutes: this.mutes,
      yearendSheep: this.yearendSheep,
      yearendHogs: this.yearendHogs,
      femalHogs: this.femalHogs,
      slaughteredFattenedHogs: this.slaughteredFattenedHogs,
      slaughteredCattle: this.slaughteredCattle,
      slaughteredSheep: this.slaughteredSheep,
      slaughteredPoultry: this.slaughteredPoultry,
      milk: this.milk,
      honey: this.honey,
      eggs: this.eggs,
      teaOutputAll: this.teaOutputAll,
      greenTea: this.greenTea,
      wulongTea: this.wulongTea,
      whiteTea: this.whiteTea,
      otherTea: this.otherTea,
      teaPlantationArea: this.teaPlantationArea,
      pickedArea: this.pickedArea,
      fruitOutputAll: this.fruitOutputAll,
      peaches: this.peaches,
      citrus: this.citrus,
      pears: this.pears,
      grapes: this.grapes,
      persimmons: this.persimmons,
      kiwiFruit: this.kiwiFruit,
      yearendOrchardArea: this.yearendOrchardArea,
      citrusArea: this.citrusArea,
      pearsArea: this.pearsArea,
      grapesArea: this.grapesArea,
      peachsArea: this.peachsArea,
      kiwiArea: this.kiwiArea,
      aquaticProducts: this.aquaticProducts,
      fishCaughtAll: this.fishCaughtAll,
      fishCaught: this.fishCaught,
      shrimpsCaught: this.shrimpsCaught,
      otherCaught: this.otherCaught,
      fishArtificiallyAll: this.fishArtificiallyAll,
      fishArtificially: this.fishArtificially,
      shrimpsArtificially: this.shrimpsArtificially,
      otherArtificially: this.otherArtificially,
      fishCulturedAll: this.fishCulturedAll,
      fishCultured: this.fishCultured,
      shellfhshCultured: this.shellfhshCultured,
      otherCultured: this.otherCultured,
      freshCulturedArea: this.freshCulturedArea,
      paddyCulturedArea: this.paddyCulturedArea,
      proliferationArtificiallyArea: this.proliferationArtificiallyArea,
      year: this.year,
    };
  }
}
