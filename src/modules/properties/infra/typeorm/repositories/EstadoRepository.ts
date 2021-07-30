import { EntityRepository, Repository } from 'typeorm';

import Estado from '../entities/Estado';


@EntityRepository(Estado)
class EstadoRepository extends Repository<Estado> {
    
}

export default EstadoRepository;
