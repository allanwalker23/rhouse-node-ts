import CreateUserInitialDTO from '@modules/users/dtos/CreateUsersInitialDTO';
import CreateUsersDTO from '@modules/users/dtos/CreateUsersInitialDTO';
import UpdateUserDTO from '@modules/users/dtos/UpdateUserDTO';
import UsersRepository from '@modules/users/repositories/UsersRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import Usuario from '../entities/Usuario';


@EntityRepository(Usuario)
class UsuarioRepository implements UsersRepository{
    private ormRepository:Repository<Usuario>
    constructor(){
        this.ormRepository=getRepository(Usuario)
    }
   
    public async find(): Promise<Usuario[] | undefined> {
        const allUsers = await this.ormRepository.find();
        return allUsers;
    }

    public async findById(id:string):Promise<Usuario | undefined>{
        const user = await this.ormRepository.findOne(id);

        return user;
    }

    public async findByNomeUsuario(nome_usuario: string): Promise<Usuario | undefined> {
        const user = await this.ormRepository.findOne({
            where:{nome_usuario},
        })
    
        return user;

    }

    public async findByTelefone(telefone: string): Promise<Usuario | undefined> {
        const user = await this.ormRepository.findOne({
            where:{telefone},
        })
    
        return user;
    }

    public async create({nome_completo,nome_usuario,email,senha,telefone,tipo_usuario}:CreateUserInitialDTO):Promise<Usuario>{

        const user = this.ormRepository.create({
           nome_completo,nome_usuario,email,senha,telefone,tipo_usuario
        })
        

        await this.ormRepository.save(user)

        return user;

    }

    public async update({
        id,
        bairro,
        cep,
        cpf,
        email,
        nome_completo,
        nome_usuario,
        sobre_voce,
        telefone,
        senha,
        tipo_usuario,
        complemento,
        logradouro,
        numero}:UpdateUserDTO):Promise<any>{

        const id2= Number(id)

        return await this.ormRepository.save({
            id:id2,
            senha,
            tipo_usuario,
            bairro:bairro,
            cep:cep,
            cpf:cpf,
            email:email,
            nome_completo:nome_completo,
            nome_usuario:nome_usuario,
            sobre_voce:sobre_voce,
            complemento:complemento,
            logradouro:logradouro,
            numero:numero,
            telefone:telefone,


        })
    }

    public async findOne(id:string):Promise<Usuario| undefined>{

        const user =await this.ormRepository.findOne(id);

        return user;
    }

    public async findByEmail(email:string):Promise<Usuario | undefined>{
        const user = await this.ormRepository.findOne({
            where:{email},
        })
    
        return user;
    }

    public async findByCpf(cpf:string):Promise<Usuario | undefined>{
        const user = await this.ormRepository.findOne({
            where:{cpf},
        })
    
        return user;
    }

    public async comparePassword(password:string,passwordCrypt:string):Promise<Usuario | undefined>{
        const user = await this.ormRepository.findOne({where:{senha:passwordCrypt}})

        return user;
    }

    public async save(user:Usuario):Promise<Usuario>{
        
        return this.ormRepository.save(user)
    }
}

export default UsuarioRepository;
