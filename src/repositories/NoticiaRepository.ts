import { EntityRepository, Repository } from 'typeorm';
import Noticia from '../models/Noticia';

@EntityRepository(Noticia)
class NoticiaRepository extends Repository<NoticiaRepository> {

}

export default NoticiaRepository;
