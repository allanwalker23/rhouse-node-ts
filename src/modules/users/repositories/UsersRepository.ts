
import CreateUserInitialDTO from "../dtos/CreateUsersInitialDTO";
import UpdateUserDTO from "../dtos/UpdateUserDTO";
import Usuario from "../infra/typeorm/entities/Usuario";

export default interface UsersRepository{
    findById(id: string | number): Promise<Usuario | undefined>;
    findByNomeUsuario(nome_usuario:string):Promise<Usuario | undefined>;
    findByTelefone(telefone:string):Promise<Usuario | undefined>;
    findByEmail(email:string):Promise<Usuario | undefined>;
    findByCpf(cpf:string):Promise<Usuario | undefined>;
    comparePassword(password:string,passwordCrypt:string):Promise<Usuario | undefined>;
    find():Promise<Usuario[] | undefined>;
    create(data:CreateUserInitialDTO):Promise<Usuario>;
    update(data:UpdateUserDTO):Promise<Usuario>;
    
    save(user: Usuario): Promise<Usuario>;
    

}