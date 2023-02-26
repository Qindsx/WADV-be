import { EntityRepository, Repository } from 'typeorm';

import { CropsSownOutputHectare_7_Parent } from '../entities/CropsSownOutputHectare_7_Parent';

@EntityRepository(CropsSownOutputHectare_7_Parent)
export default class CropsSownOutputHectare_7_Parent_Repository extends Repository<CropsSownOutputHectare_7_Parent> {
  // Custom Repository Functions go here.
}
