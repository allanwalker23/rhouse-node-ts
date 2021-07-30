import { EntityRepository, Repository } from 'typeorm';
import TipoCobranca from '../entities/TipoCobranca';


@EntityRepository(TipoCobranca)
class TipoCobrancaRepository extends Repository<TipoCobranca> {

}

export default TipoCobrancaRepository;
