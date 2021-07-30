import { EntityRepository, Repository } from 'typeorm';
import FotoLocal from '../entities/FotoLocal';


@EntityRepository(FotoLocal)
class FotoLocalRepository extends Repository<FotoLocal> {
    
}

export default FotoLocalRepository;
