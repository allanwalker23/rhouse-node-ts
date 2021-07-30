import { EntityRepository, Repository } from 'typeorm';
import BeneficioLocal from '../entities/BeneficioLocal';


@EntityRepository(BeneficioLocal)
class BeneficioLocalRepository extends Repository<BeneficioLocal> {
    
}

export default BeneficioLocalRepository;
