import { EntityRepository, Repository } from 'typeorm';
import TipoPropriedade from '../models/TipoPropriedade';


@EntityRepository(TipoPropriedade)
class TipoPropriedadeRepository extends Repository<TipoPropriedade> {
 
}

export default TipoPropriedadeRepository;
