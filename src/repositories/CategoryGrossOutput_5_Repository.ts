import { EntityRepository, Repository } from 'typeorm';

import { CategoryGrossOutput_5 } from '../entities/CategoryGrossOutput_5';

@EntityRepository(CategoryGrossOutput_5)
export default class CategoryGrossOutput_5_Repository extends Repository<CategoryGrossOutput_5> {
  // Custom Repository Functions go here.
}
