import { EntityRepository, Repository } from 'typeorm';

import { AgriculturalProductionMechanization_2 } from '../entities/AgriculturalProductionMechanization_2';

@EntityRepository(AgriculturalProductionMechanization_2)
export default class AgriculturalProductionMechanization_2_Repository extends Repository<AgriculturalProductionMechanization_2> {
  // Custom Repository Functions go here.
}
