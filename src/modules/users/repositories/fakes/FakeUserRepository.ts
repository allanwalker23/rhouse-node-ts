import CreateUserInitialDTO from '@modules/users/dtos/CreateUsersInitialDTO';
import CreateUsersDTO from '@modules/users/dtos/CreateUsersInitialDTO';
import UpdateUserDTO from '@modules/users/dtos/UpdateUserDTO';
import Usuario from '@modules/users/infra/typeorm/entities/Usuario';
import UsersRepository from '@modules/users/repositories/UsersRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';

const UUID = require('uuid-int');


class FakeUserRepository implements UsersRepository{

 
  private users: Usuario[]=[];

    public async find(): Promise<Usuario[] | undefined> {
      const findUsers = this.users;
        return findUsers;
    }

    public async findById(id:string):Promise<Usuario | undefined>{
      const findUser = this.users.find(user => user.id ===id);

      return findUser;
  }

    public async create({nome_completo,email,nome_usuario,senha,telefone}:CreateUserInitialDTO):Promise<Usuario>{
      const user = new Usuario();
      const id = 0;
      const generator = UUID(id);
      const uuid = generator.uuid();

     
      user.id=uuid;
      user.nome_completo=nome_completo;
      user.nome_usuario=nome_usuario;
      user.email=email;
      user.senha=senha;
      user.telefone=telefone;
      user.tipo_usuario=0;

     
      this.users.push(user);

      return user;
      
    }

    public async update({nome_completo,email,nome_usuario,telefone,cidade,complemento,logradouro,
    numero,sobre_voce,cpf,cep,bairro,id}:UpdateUserDTO):Promise<Usuario>{
      const user = new Usuario();
     
      user.id=id;
      user.nome_completo=nome_completo;
      user.nome_usuario=nome_usuario;
      user.email=email;
      user.telefone=telefone;
      user.bairro=bairro;
      user.cidade=cidade,
      user.complemento=complemento,
      user.logradouro=logradouro,
      user.numero=numero,
      user.sobre_voce=sobre_voce,
      user.cpf=cpf,
      user.cep=cep
     
      this.save(user);

      return user;
      
    }

    public async findByEmail(email:string):Promise<Usuario | undefined>{
      const findUser = this.users.find(user => user.email ===email);
  
      return findUser;
      }

    public async findByNomeUsuario(nome_usuario:string):Promise<Usuario | undefined>{
        const findUser = this.users.find(user => user.nome_usuario ===nome_usuario);
    
        return findUser;
    }

    public async findByTelefone(telefone:string):Promise<Usuario | undefined>{
      const findUser = this.users.find(user => user.telefone ===telefone);
  
      return findUser;
  }


  public async findByCpf(cpf:string):Promise<Usuario | undefined>{
    const findUser = this.users.find(user => user.cpf ===cpf);

    return findUser;
}

    public async findOne(id:string):Promise<Usuario| undefined>{

      const findUser= this.users.find(user => user.id ===id);

      return findUser;
      
    }

    public async comparePassword(senha:string,passwordCrypt:string):Promise<Usuario | undefined>{
      const findUser = this.users.find(user => senha===passwordCrypt)

      return findUser;
    }

    public async save(user:Usuario):Promise<Usuario>{
      const findIndex=this.users.findIndex(findUser => findUser.id ===user.id);

      this.users[findIndex]=user;
      return user;
       
    }
}

export default FakeUserRepository;
