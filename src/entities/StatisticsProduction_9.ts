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

  @Column('varchar', { name: 'year', comment: '年份', length: 255 })
  year: string;

  @Column('double', {
    name: 'milk',
    nullable: true,
    comment: '牛奶产量',
    precision: 22,
  })
  milk: number | null;

  @Column('double', {
    name: 'honey',
    nullable: true,
    comment: '蜂蜜',
    precision: 22,
  })
  honey: number | null;

  @Column('double', {
    name: 'eggs',
    nullable: true,
    comment: '禽蛋产量',
    precision: 22,
  })
  eggs: number | null;

  @Column('double', {
    name: 'tea_output_all',
    nullable: true,
    comment: '茶叶总产量',
    precision: 22,
  })
  teaOutputAll: number | null;

  @Column('double', {
    name: 'green_tea',
    nullable: true,
    comment: '绿茶',
    precision: 22,
  })
  greenTea: number | null;

  @Column('double', {
    name: 'wulong_tea',
    nullable: true,
    comment: '清茶',
    precision: 22,
  })
  wulongTea: number | null;

  @Column('double', {
    name: 'white_tea',
    nullable: true,
    comment: '白茶',
    precision: 22,
  })
  whiteTea: number | null;

  @Column('double', {
    name: 'other_tea',
    nullable: true,
    comment: '其他茶',
    precision: 22,
  })
  otherTea: number | null;

  @Column('double', {
    name: 'tea_plantation_area',
    nullable: true,
    comment: '年末茶园面积',
    precision: 22,
  })
  teaPlantationArea: number | null;

  @Column('double', {
    name: 'picked_area',
    nullable: true,
    comment: '采摘面积',
    precision: 22,
  })
  pickedArea: number | null;

  @Column('double', {
    name: 'fruit_output_all',
    nullable: true,
    comment: '水果产量',
    precision: 22,
  })
  fruitOutputAll: number | null;

  @Column('double', {
    name: 'peaches',
    nullable: true,
    comment: '桃子',
    precision: 22,
  })
  peaches: number | null;

  @Column('double', {
    name: 'citrus',
    nullable: true,
    comment: '柑橘',
    precision: 22,
  })
  citrus: number | null;

  @Column('double', {
    name: 'pears',
    nullable: true,
    comment: '梨子',
    precision: 22,
  })
  pears: number | null;

  @Column('double', {
    name: 'grapes',
    nullable: true,
    comment: '葡萄',
    precision: 22,
  })
  grapes: number | null;

  @Column('double', {
    name: 'persimmons',
    nullable: true,
    comment: '葡萄',
    precision: 22,
  })
  persimmons: number | null;

  @Column('double', {
    name: 'kiwi_fruit',
    nullable: true,
    comment: '猕猴桃',
    precision: 22,
  })
  kiwiFruit: number | null;

  @Column('double', {
    name: 'yearend_orchard_area',
    nullable: true,
    comment: '年末果园面积',
    precision: 22,
  })
  yearendOrchardArea: number | null;

  @Column('double', {
    name: 'citrus_area',
    nullable: true,
    comment: '柑橘园面积',
    precision: 22,
  })
  citrusArea: number | null;

  @Column('double', {
    name: 'pears_area',
    nullable: true,
    comment: '梨园面积',
    precision: 22,
  })
  pearsArea: number | null;

  @Column('double', {
    name: 'grapes_area',
    nullable: true,
    comment: '葡萄园面积',
    precision: 22,
  })
  grapesArea: number | null;

  @Column('double', {
    name: 'peachs_area',
    nullable: true,
    comment: '桃园面积',
    precision: 22,
  })
  peachsArea: number | null;

  @Column('double', {
    name: 'kiwi_area',
    nullable: true,
    comment: '猕猴桃面积',
    precision: 22,
  })
  kiwiArea: number | null;

  @Column('double', {
    name: 'aquatic_products',
    nullable: true,
    comment: '水产产量',
    precision: 22,
  })
  aquaticProducts: number | null;

  @Column('double', {
    name: 'fish_caught_all',
    nullable: true,
    comment: '淡水捕捞产量',
    precision: 22,
  })
  fishCaughtAll: number | null;

  @Column('double', {
    name: 'fish_caught',
    nullable: true,
    comment: '鱼类捕捞',
    precision: 22,
  })
  fishCaught: number | null;

  @Column('double', {
    name: 'shrimps_caught',
    nullable: true,
    comment: '虾蟹类',
    precision: 22,
  })
  shrimpsCaught: number | null;

  @Column('double', {
    name: 'shellfhsh_caught',
    nullable: true,
    comment: '贝类',
    precision: 22,
  })
  shellfhshCaught: number | null;

  @Column('double', {
    name: 'other_caught',
    nullable: true,
    comment: '其他类',
    precision: 22,
  })
  otherCaught: number | null;

  @Column('double', {
    name: 'fish_artificially_all',
    nullable: true,
    comment: '淡水养殖产量',
    precision: 22,
  })
  fishArtificiallyAll: number | null;

  @Column('double', {
    name: 'fish_artificially',
    nullable: true,
    comment: '鱼类养殖',
    precision: 22,
  })
  fishArtificially: number | null;

  @Column('double', {
    name: 'shellfhsh_artificially',
    nullable: true,
    comment: '贝类养殖',
    precision: 22,
  })
  shellfhshArtificially: number | null;

  @Column('double', {
    name: 'other_artificially',
    nullable: true,
    comment: '其他类',
    precision: 22,
  })
  otherArtificially: number | null;

  @Column('double', {
    name: 'shrimps_artificially',
    nullable: true,
    comment: '虾蟹养殖',
    precision: 22,
  })
  shrimpsArtificially: number | null;

  @Column('double', {
    name: 'fish_cultured_all',
    nullable: true,
    comment: '增值养殖产量',
    precision: 22,
  })
  fishCulturedAll: number | null;

  @Column('double', {
    name: 'fish_cultured',
    nullable: true,
    comment: '鱼类增殖',
    precision: 22,
  })
  fishCultured: number | null;

  @Column('double', {
    name: 'shellfhsh_cultured',
    nullable: true,
    comment: '贝类增值',
    precision: 22,
  })
  shellfhshCultured: number | null;

  @Column('double', {
    name: 'other_cultured',
    nullable: true,
    comment: '其他增值类',
    precision: 22,
  })
  otherCultured: number | null;

  @Column('double', {
    name: 'fresh_cultured_area',
    nullable: true,
    comment: '淡水养殖面积',
    precision: 22,
  })
  freshCulturedArea: number | null;

  @Column('double', {
    name: 'paddy_cultured_area',
    nullable: true,
    comment: '稻田养殖面积',
    precision: 22,
  })
  paddyCulturedArea: number | null;

  @Column('double', {
    name: 'proliferation_artificially_area',
    nullable: true,
    comment: '增值养殖面积',
    precision: 22,
  })
  proliferationArtificiallyArea: number | null;

  @Column('double', {
    name: 'shrimps_cultured',
    nullable: true,
    comment: '蟹类增值',
    precision: 22,
  })
  shrimpsCultured: number | null;

  @Column('boolean', {
    name: 'isDel',
    nullable: true,
    comment: '能否删除',
    default: '1',
  })
  isDel: number | null;

  toJSON() {
    return {
      shrimpsCultured: this.shrimpsCultured,
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
      shellfhshArtificially: this.shellfhshArtificially,
      otherCaught: this.otherCaught,
      fishArtificiallyAll: this.fishArtificiallyAll,
      shellfhshCaught: this.shellfhshCaught,
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
