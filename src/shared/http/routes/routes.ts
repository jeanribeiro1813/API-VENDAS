import {Router } from 'express';
import productsRoutes from '../../../modules/products/routes/productsRoutes';
import usersRoutes  from '../../../modules/users/routes/usersRoutes'
import sessionRoutes  from '../../../modules/users/routes/sessionRoutes'
import passwordRoutes  from '../../../modules/users/routes/passwordRoutes'
import resetRoutes  from '../../../modules/users/routes/resetPasswordRoutes'



const routes = Router();

routes.use('/product',productsRoutes)
routes.use('/users',usersRoutes)
routes.use('/session',sessionRoutes)
routes.use('/password',passwordRoutes)
routes.use('/password',resetRoutes)





export default routes;
