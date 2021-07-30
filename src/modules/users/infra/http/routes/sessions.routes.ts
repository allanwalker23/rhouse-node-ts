import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { Router } from 'express';
import {container} from 'tsyringe';
const sessionsRouter = Router();
sessionsRouter.post('/', async (request, response) => {
    try{
      const {email,senha}=request.body;
      
      const authenticateUser = container.resolve(AuthenticateUserService);
  
        const {token,user}=await authenticateUser.execute({
          email,
          senha
      })
  
      return response.json({token,user})
    } catch(err){
        return response.status(err.statusCode).json({error:err.message});
    }
  });
export default sessionsRouter;
