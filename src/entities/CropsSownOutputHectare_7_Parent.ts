import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crops_sown_output_hectare_7_parent', {
  schema: 'agricultural_statistics',
})
export class CropsSownOutputHectare_7_Parent {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'agricultural_product_name',
    nullable: true,
    length: 255,
  })
  agriculturalProductName: string | null;

  @Column('varchar', {
    name: 'parent_name',
    nullable: true,
    length: 255,
  })
  parentName: string | null;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    length: 255,
  })
  name: string | null;

  toJSON() {
    return {
      agriculturalProductName: this.agriculturalProductName,
      parentName: this.parentName,
      name: this.name,
    };
  }
}
