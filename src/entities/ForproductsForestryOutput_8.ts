import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forproducts_forestry_output_8', { schema: 'agricultural_statistics' })
export class ForproductsForestryOutput_8 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('double', {
    name: 'barren_mountain',
    nullable: true,
    comment: '荒山沙堤造林面积',
    precision: 22,
  })
  barrenMountain: number | null;

  @Column('double', {
    name: 'forest_afforestation',
    nullable: true,
    comment: '有林地造林面积',
    precision: 22,
  })
  forestAfforestation: number | null;

  @Column('double', {
    name: 'reforestation_area',
    nullable: true,
    comment: '更新改造面积',
    precision: 22,
  })
  reforestationArea: number | null;

  @Column('double', {
    name: 'scattered_tree_planging',
    nullable: true,
    comment: '四旁零星植树',
    precision: 22,
  })
  scatteredTreePlanging: number | null;

  @Column('double', {
    name: 'forest_tending_area',
    nullable: true,
    comment: '森林抚育面积',
    precision: 22,
  })
  forestTendingArea: number | null;

  @Column('double', {
    name: 'forest_germchit',
    nullable: true,
    comment: '林木种苗',
    precision: 22,
  })
  forestGermchit: number | null;

  @Column('double', {
    name: 'seedling_yield',
    nullable: true,
    comment: '当年苗木产量',
    precision: 22,
  })
  seedlingYield: number | null;

  @Column('double', {
    name: 'seedling_area',
    nullable: true,
    comment: '育苗面积',
    precision: 22,
  })
  seedlingArea: number | null;

  @Column('double', {
    name: 'bamboo_timber_harvesting',
    nullable: true,
    comment: '竹木采伐',
    precision: 22,
  })
  bambooTimberHarvesting: number | null;

  @Column('double', {
    name: 'timber',
    nullable: true,
    comment: '木材',
    precision: 22,
  })
  timber: number | null;

  @Column('double', {
    name: 'bamboo',
    nullable: true,
    comment: '竹材',
    precision: 22,
  })
  bamboo: number | null;

  @Column('double', {
    name: 'nan_bamboo',
    nullable: true,
    comment: '楠竹',
    precision: 22,
  })
  nanBamboo: number | null;

  @Column('double', {
    name: 'sundry_bamboo',
    nullable: true,
    comment: '杂竹',
    precision: 22,
  })
  sundryBamboo: number | null;

  @Column('varchar', { name: 'year', nullable: true, length: 255 })
  year: string | null;

  @Column('double', {
    name: 'seeds_tung_oil_tree',
    nullable: true,
    comment: '油桐籽',
    precision: 22,
  })
  seedsTungOilTree: number | null;

  @Column('double', {
    name: 'oil_tea_camellia_seed',
    nullable: true,
    comment: '油茶籽',
    precision: 22,
  })
  oilTeaCamelliaSeed: number | null;

  @Column('double', {
    name: 'chinese_sapium_seed',
    nullable: true,
    comment: '乌椿籽',
    precision: 22,
  })
  chineseSapiumSeed: number | null;

  @Column('double', {
    name: 'chinese_gall',
    nullable: true,
    comment: '五倍子',
    precision: 22,
  })
  chineseGall: number | null;

  @Column('double', {
    name: 'chinese_chestnut',
    nullable: true,
    comment: '板栗',
    precision: 22,
  })
  chineseChestnut: number | null;

  @Column('double', {
    name: 'mushroom',
    nullable: true,
    comment: '香菇',
    precision: 22,
  })
  mushroom: number | null;

  @Column('double', {
    name: 'white_fungus',
    nullable: true,
    comment: '白木耳',
    precision: 22,
  })
  whiteFungus: number | null;

  @Column('double', {
    name: 'black_fungus',
    nullable: true,
    comment: '黑木耳',
    precision: 22,
  })
  blackFungus: number | null;

  toJSON() {
    return {
      barrenMountain: this.barrenMountain,
      forestAfforestation: this.forestAfforestation,
      reforestationArea: this.reforestationArea,
      scatteredTreePlanging: this.scatteredTreePlanging,
      forestTendingArea: this.forestTendingArea,
      forestGermchit: this.forestGermchit,
      seedlingYield: this.seedlingYield,
      seedlingArea: this.seedlingArea,
      bambooTimberHarvesting: this.bambooTimberHarvesting,
      timber: this.timber,
      bamboo: this.bamboo,
      nanBamboo: this.nanBamboo,
      sundryBamboo: this.sundryBamboo,
      seedsTungOilTree: this.seedsTungOilTree,
      oilTeaCamelliaSeed: this.oilTeaCamelliaSeed,
      chineseSapiumSeed: this.chineseSapiumSeed,
      chineseGall: this.chineseGall,
      chineseChestnut: this.chineseChestnut,
      mushroom: this.mushroom,
      whiteFungus: this.whiteFungus,
      blackFungus: this.blackFungus,
      year: this.year,
    };
  }
}
