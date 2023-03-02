import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('rural_infrastructure_1', { schema: 'agricultural_statistics' })
export class RuralInfrastructure_1 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', {
    name: 'township_gov',
    nullable: true,
    comment: '乡政府（个）',
  })
  townshipGov: number | null;

  @Column('int', { name: 'town_gov', nullable: true, comment: '镇政府(个)' })
  townGov: number | null;

  @Column('int', {
    name: 'subdistrict_off',
    nullable: true,
    comment: '办事处(个)',
  })
  subdistrictOff: number | null;

  @Column('int', {
    name: 'villagers_com',
    nullable: true,
    comment: '村委会(个)',
  })
  villagersCom: number | null;

  @Column('int', {
    name: 'villagers_sub',
    nullable: true,
    comment: '村民小组(个)',
  })
  villagersSub: number | null;

  @Column('int', {
    name: 'villages_water',
    nullable: true,
    comment: '自来水受益村数(个)',
  })
  villagesWater: number | null;

  @Column('int', {
    name: 'villages_tv',
    nullable: true,
    comment: '通有线电视村数(个)',
  })
  villagesTv: number | null;

  @Column('double', {
    name: 'villages_prop_tv',
    nullable: true,
    comment: '通有线电视村数占全部村委会比重(%)',
    precision: 22,
  })
  villagesPropTv: number | null;

  @Column('int', {
    name: 'villages_broad',
    nullable: true,
    comment: '通宽带村数(个)',
  })
  villagesBroad: number | null;

  @Column('double', {
    name: 'villages_prop_broad',
    nullable: true,
    comment: '通宽带村数占全部村委会比重(%)',
    precision: 22,
  })
  villagesPropBroad: number | null;

  @Column('varchar', {
    name: 'year',
    nullable: true,
    comment: '年份',
    length: 255,
  })
  year: string | null;

  @Column('double', {
    name: 'villages_prop_water',
    nullable: true,
    comment: '自来水受益村数占全部村委会比重(%)',
    precision: 22,
  })
  villagesPropWater: number | null;

  @Column('double', {
    name: 'no_agriculture_employees',
    nullable: true,
    comment: '农村非农从业人员(万人)',
    precision: 22,
  })
  noAgricultureEmployees: number | null;

  @Column('double', {
    name: 'agricultural_laborers',
    nullable: true,
    comment: '国营农场农业从业人员(万人)',
    precision: 22,
  })
  agriculturalLaborers: number | null;

  @Column('double', {
    name: 'no_agricultural_laborers',
    nullable: true,
    comment: '国营农场非农业从业人员(万人)',
    precision: 22,
  })
  noAgriculturalLaborers: number | null;

  @Column('double', {
    name: 'agriculture_employees',
    nullable: true,
    comment: '农村农从业人员(万人',
    precision: 22,
  })
  agricultureEmployees: number | null;

  @Column('boolean', {
    name: 'isDel',
    nullable: true,
    comment: '能否删除',
    default: '1',
  })
  isDel: number | null;

  toJSON() {
    return {
      townshipGov: this.townshipGov,
      townGov: this.townGov,
      subdistrictOff: this.subdistrictOff,
      villagersCom: this.villagersCom,
      villagersSub: this.villagersSub,
      agricultureEmployees: this.agricultureEmployees,
      noAgricultureEmployees: this.noAgricultureEmployees,
      agriculturalLaborers: this.agriculturalLaborers,
      noAgriculturalLaborers: this.noAgriculturalLaborers,
      villagesWater: this.villagesWater,
      villagesPropWater: this.villagesPropWater,
      villagesTv: this.villagesTv,
      villagesPropTv: this.villagesPropTv,
      villagesBroad: this.villagesBroad,
      villagesPropBroad: this.villagesPropBroad,
      year: this.year,
    };
  }
}
