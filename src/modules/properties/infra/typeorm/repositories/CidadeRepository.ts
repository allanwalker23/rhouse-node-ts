import { EntityRepository, Repository } from 'typeorm';
import Cidade from '../entities/Cidade';

@EntityRepository(Cidade)
class CidadeRepository extends Repository<Cidade> {
    
}

export default CidadeRepository;
