import { EntityRepository, Repository } from 'typeorm';

import { RuralInfrastructure_1 } from '../entities/RuralInfrastructure_1';

@EntityRepository(RuralInfrastructure_1)
export default class RuralInfrastructure_1_Repository extends Repository<RuralInfrastructure_1> {
  // Custom Repository Functions go here.
}
