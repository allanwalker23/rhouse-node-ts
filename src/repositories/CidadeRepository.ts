import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import Cidade from '../models/Cidade';
import PropriedadeRepository from './PropriedadeRepository';

@EntityRepository(Cidade)
class CidadeRepository extends Repository<Cidade> {
    
}

export default CidadeRepository;
