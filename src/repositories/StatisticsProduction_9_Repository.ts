import { EntityRepository, Repository } from 'typeorm';

import { StatisticsProduction_9 } from '../entities/StatisticsProduction_9';

@EntityRepository(StatisticsProduction_9)
export default class StatisticsProduction_9_Repository extends Repository<StatisticsProduction_9> {
  // Custom Repository Functions go here.
}
