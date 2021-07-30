import { EntityRepository, Repository } from 'typeorm';
import TipoPropriedade from '../entities/TipoLocal';

@EntityRepository(TipoPropriedade)
class TipoPropriedadeRepository extends Repository<TipoPropriedade> {
 
}

export default TipoPropriedadeRepository;
