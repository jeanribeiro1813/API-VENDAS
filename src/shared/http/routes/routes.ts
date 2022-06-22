import {Router } from 'express';
import productsRoutes from '../../../modules/products/routes/productsRoutes';
import usersRoutes  from '../../../modules/users/routes/usersRoutes'
import sessionRoutes  from '../../../modules/users/routes/sessionRoutes'


const routes = Router();

routes.use('/product',productsRoutes)
routes.use('/users',usersRoutes)
routes.use('/session',sessionRoutes)




export default routes;
