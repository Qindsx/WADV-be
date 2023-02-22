import { EntityRepository, Repository } from 'typeorm';

import { GrossOutputCompoosition_4 } from '../entities/GrossOutputCompoosition_4';

@EntityRepository(GrossOutputCompoosition_4)
export default class GrossOutputCompoosition_4_Repository extends Repository<GrossOutputCompoosition_4> {
  // Custom Repository Functions go here.
}
