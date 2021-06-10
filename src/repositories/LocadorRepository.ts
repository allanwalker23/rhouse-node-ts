import { EntityRepository, Repository } from 'typeorm';
import Locador from '../models/Locador';

@EntityRepository(Locador)
class LocadorRepository extends Repository<Locador> {

}

export default LocadorRepository;
