import { celebrate ,Joi, Segments} from 'celebrate';
import { Router } from 'express';
import productsRouter from '../controllers/ProductsControllers';
import isAutentication from '../../../shared/middlewares/isAutentication'

const routes =  Router()

const produto = new productsRouter()

routes.use(isAutentication)


routes.get('/show',produto.show)

routes.delete('/delete/:id',celebrate({
  [Segments.PARAMS]:{
    id:Joi.string().uuid().required()
  }
}),produto.delete)

routes.post('/create'
// ,celebrate({
//   [Segments.BODY]:{
//     name:Joi.string().optional(),
//     price:Joi.string().optional(),
//     quantity:Joi.string().optional(),
//   }
// })
,produto.create)

routes.put('/update/:id',celebrate({
  [Segments.PARAMS]:{
    id:Joi.string().uuid().required()
  }
}),produto.update)

routes.get('/index/:id',
celebrate({
  [Segments.PARAMS]:{
    id:Joi.string().uuid().required()
  }
}),produto.index)



export default routes
