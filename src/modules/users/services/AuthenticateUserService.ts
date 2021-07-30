import AppError from "../../../shared/errors/AppError";
import crypto from 'crypto';
import authConfig from '../../../config/auth';
import {sign} from 'jsonwebtoken'
import {injectable,inject} from 'tsyringe'
import Usuario from "../infra/typeorm/entities/Usuario";
import UsersRepository from "../repositories/UsersRepository";
import MD5Provider from "../providers/MD5Provider/models/MD5Provider";


interface Request{
    email:string;
    senha:string;  
}

interface Response{
    user:Usuario;
    token:string
}

@injectable()
class AuthenticateUserService{
    
    constructor(
        @inject('UsersRepository')
        private userRepository:UsersRepository,

        @inject('HashProvider')
        private hashProvider:MD5Provider
        ){}

    public async execute({email,senha}:Request):Promise<Response>{

        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new AppError('Oops! Seu email ou senha está incorreto',401)
        }
        
        const passwordHashed = await this.hashProvider.generateHash(senha);

        const passwordDatabase = await this.userRepository.comparePassword(senha,passwordHashed);

        if(!passwordDatabase){
            throw new AppError('Oops! Seu email ou senha está incorreto',401)
        }

        const {secret, expiresIn}=authConfig.jwt;

        const token= sign({}, secret,{
            subject:user.id.toString(),
            expiresIn:expiresIn
        })

        return{
            user,
            token
        }

    }

}

export default AuthenticateUserService;