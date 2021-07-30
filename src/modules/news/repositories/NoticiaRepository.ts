import { EntityRepository, Repository } from 'typeorm';
import Noticia from '../infra/typeorm/entities/Noticia';


@EntityRepository(Noticia)
class NoticiaRepository extends Repository<NoticiaRepository> {

}

export default NoticiaRepository;
