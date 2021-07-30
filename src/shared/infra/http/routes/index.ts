import { Router } from 'express';


import usersRouter from '@modules/users/infra/http/routes/users.routes';
import localRouter from '@modules/properties/infra/http/routes/local.routes'
import noticiaRouter from '@modules/news/infra/http/routes/noticias.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();


routes.use('/usuarios', usersRouter);
routes.use('/locais', localRouter);
routes.use('/noticias', noticiaRouter);
routes.use('/sessions', sessionRouter);



export default routes;
