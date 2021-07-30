import { CreateLocalDTO } from '@modules/properties/dtos/CreateLocalDTO';
import Local from '@modules/properties/infra/typeorm/entities/Local';
import ILocalRepository from '@modules/properties/repositories/ILocalRepository';
const UUID = require('uuid-int');
class FakeLocalRepository implements ILocalRepository {
    private locais:Local[]=[];
    
    public async find(): Promise<Local[] | undefined> {
        const findLocal = this.locais;
        return findLocal;
    }

    public async create(data: CreateLocalDTO): Promise<Local> {
        const local = new Local();
        const id = 0;
        const generator = UUID(id);
        const uuid = generator.uuid();
        Object.assign(local,{id:uuid},data)

        this.locais.push(local)

        return local;

    
    }
}

export default FakeLocalRepository;
