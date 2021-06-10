import { Router } from 'express';


import usersRouter from './users.routes';
import propriedadeRouter from './propriedade.routes'
import locadorRouter from './locador.routes';
import noticiaRouter from './noticias.routes';
import cidadeRouter from './cidade.routes';
import tipoPropriedadeRouter from './tipo.propriedade.routes';
const routes = Router();


routes.use('/clientes', usersRouter);
routes.use('/tipos', tipoPropriedadeRouter);
routes.use('/propriedades', propriedadeRouter);
routes.use('/locadores', locadorRouter);
routes.use('/noticias', noticiaRouter);
routes.use('/cidades', cidadeRouter);



export default routes;
