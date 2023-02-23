import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agricultural_production_mechanization_2', {
  schema: 'agricultural_statistics',
})
export class AgriculturalProductionMechanization_2 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('double', {
    name: 'effective_irrigation_area',
    nullable: true,
    comment: '有效灌溉面积(千公顷)',
    precision: 22,
  })
  effectiveIrrigationArea: number | null;

  @Column('double', {
    name: 'Flood_Drought_area',
    nullable: true,
    comment: '旱涝保收面积(千公顷)',
    precision: 22,
  })
  floodDroughtArea: number | null;

  @Column('double', {
    name: 'pumped_irrigation_area',
    nullable: true,
    comment: '机电排灌面积(千公顷)',
    precision: 22,
  })
  pumpedIrrigationArea: number | null;

  @Column('double', {
    name: 'electricity_rural_area',
    nullable: true,
    comment: '农村用电量(万千瓦小时)',
    precision: 22,
  })
  electricityRuralArea: number | null;

  @Column('double', {
    name: 'nitrogenous_fertilizer',
    nullable: true,
    comment: '农用化肥施用量-氮肥(吨)',
    precision: 22,
  })
  nitrogenousFertilizer: number | null;

  @Column('double', {
    name: 'phosphate_fertilizer',
    nullable: true,
    comment: '农用化肥施用量-磷肥(吨)',
    precision: 22,
  })
  phosphateFertilizer: number | null;

  @Column('double', {
    name: 'potash_fertilizer',
    nullable: true,
    comment: '农用化肥施用量-钾肥(吨)',
    precision: 22,
  })
  potashFertilizer: number | null;

  @Column('double', {
    name: 'compound_fertilizer',
    nullable: true,
    comment: '农用化肥施用量-复合肥(吨)',
    precision: 22,
  })
  compoundFertilizer: number | null;

  @Column('double', {
    name: 'mulch_film',
    nullable: true,
    comment: '农用塑料薄膜使用量-地膜(吨)',
    precision: 22,
  })
  mulchFilm: number | null;

  @Column('double', {
    name: 'mulch_film_area',
    nullable: true,
    comment: '农用塑料薄膜使用量-地膜覆盖面积(千公顷)',
    precision: 22,
  })
  mulchFilmArea: number | null;

  @Column('double', {
    name: 'agricultural_diesel_oil',
    nullable: true,
    comment: '农用柴油(吨)',
    precision: 22,
  })
  agriculturalDieselOil: number | null;

  @Column('double', {
    name: 'comsumption_pesticide',
    nullable: true,
    comment: '农药使用量 (吨)',
    precision: 22,
  })
  comsumptionPesticide: number | null;

  @Column('double', {
    name: 'diesel_engines',
    nullable: true,
    comment: '柴油发动机动力(万千瓦)',
    precision: 22,
  })
  dieselEngines: number | null;

  @Column('double', {
    name: 'gasoline_engines',
    nullable: true,
    comment: '汽油发动机动力(万千瓦)',
    precision: 22,
  })
  gasolineEngines: number | null;

  @Column('int', {
    name: 'large_tractors',
    nullable: true,
    comment: '大中型拖拉机(台)',
  })
  largeTractors: number | null;

  @Column('double', {
    name: 'large_power',
    nullable: true,
    comment: '动力 (万千瓦)',
    precision: 22,
  })
  largePower: number | null;

  @Column('int', {
    name: 'mini_tractors',
    nullable: true,
    comment: '小型及扶手拖拉机(台)',
  })
  miniTractors: number | null;

  @Column('double', {
    name: 'mini_powers',
    nullable: true,
    comment: '动力(万千瓦)',
    precision: 22,
  })
  miniPowers: number | null;

  @Column('int', {
    name: 'large_machinery',
    nullable: true,
    comment: '大中型拖拉机配套农具(部)',
  })
  largeMachinery: number | null;

  @Column('int', {
    name: 'mini_machinery',
    nullable: true,
    comment: '小型拖拉机配套农具(部)',
  })
  miniMachinery: number | null;

  @Column('int', { name: 'pumps', nullable: true, comment: '农用水泵(台)' })
  pumps: number | null;

  @Column('int', { name: 'combine', nullable: true, comment: '联合收割机(台)' })
  combine: number | null;

  @Column('double', {
    name: 'combine_power',
    nullable: true,
    comment: '动力 (千瓦)',
    precision: 22,
  })
  combinePower: number | null;

  @Column('int', {
    name: 'motorized_thresher',
    nullable: true,
    comment: '机动脱离机(台)',
  })
  motorizedThresher: number | null;

  @Column('varchar', { name: 'year', nullable: true, length: 255 })
  year: string | null;

  toJSON() {
    return {
      effectiveIrrigationArea: this.effectiveIrrigationArea,
      floodDroughtArea: this.floodDroughtArea,
      pumpedIrrigationArea: this.pumpedIrrigationArea,
      electricityRuralArea: this.electricityRuralArea,
      nitrogenousFertilizer: this.nitrogenousFertilizer,
      phosphateFertilizer: this.phosphateFertilizer,
      potashFertilizer: this.potashFertilizer,
      compoundFertilizer: this.compoundFertilizer,
      mulchFilm: this.mulchFilm,
      mulchFilmArea: this.mulchFilmArea,
      agriculturalDieselOil: this.agriculturalDieselOil,
      comsumptionPesticide: this.comsumptionPesticide,
      dieselEngines: this.dieselEngines,
      gasolineEngines: this.gasolineEngines,
      largeTractors: this.largeTractors,
      largePower: this.largePower,
      miniTractors: this.miniTractors,
      miniPowers: this.miniPowers,
      largeMachinery: this.largeMachinery,
      miniMachinery: this.miniMachinery,
      pumps: this.pumps,
      combine: this.combine,
      combinePower: this.combinePower,
      motorizedThresher: this.motorizedThresher,
      year: this.year,
    };
  }
}
