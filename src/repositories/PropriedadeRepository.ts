import { EntityRepository, Repository } from 'typeorm';
import Propriedade from '../models/Propriedade';


   
interface Request{
    bairro:string;
    tipo_propriedade_id:number;
    cidade_id:number;
}

@EntityRepository(Propriedade)
class PropriedadeRepository extends Repository<Propriedade> {
}

export default PropriedadeRepository;
