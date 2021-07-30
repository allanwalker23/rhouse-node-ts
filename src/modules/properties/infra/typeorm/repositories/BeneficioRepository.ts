import { EntityRepository, Repository } from 'typeorm';
import Beneficio from '../entities/Beneficio';

@EntityRepository(Beneficio)
class BeneficioRepository extends Repository<Beneficio> {
    
}

export default BeneficioRepository;
