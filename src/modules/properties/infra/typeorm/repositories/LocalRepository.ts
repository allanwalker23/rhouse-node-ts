import { CreateLocalDTO } from '@modules/properties/dtos/CreateLocalDTO';
import ILocalRepository from '@modules/properties/repositories/ILocalRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import Local from '../entities/Local';


@EntityRepository(Local)
class LocalRepository implements ILocalRepository {
    private ormRepository:Repository<Local>
    constructor(){
        this.ormRepository=getRepository(Local)
    }
    public async find(): Promise<Local[] | undefined> {
        const all = await this.ormRepository.find()

        return all;
    }

    public async create(data: CreateLocalDTO): Promise<Local> {
        const local =this.ormRepository.create(data);
        await this.ormRepository.save(local)
        return local;
    }
}

export default LocalRepository;
