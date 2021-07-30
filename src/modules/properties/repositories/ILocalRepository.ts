import { CreateLocalDTO } from "../dtos/CreateLocalDTO";
import Local from "../infra/typeorm/entities/Local";

export default interface ILocalRepository{
    create(data:CreateLocalDTO):Promise<Local>
    find():Promise<Local[] | undefined>

}