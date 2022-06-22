import { celebrate ,Joi, Segments} from 'celebrate';
import { Router } from 'express';
import sessioRouter from '../controllers/SessionControllers';

const routes =  Router()

const user = new sessioRouter()





routes.post('/create',celebrate({
  [Segments.BODY]:{
    email:Joi.string().required(),
    password:Joi.string().required()
  }
}),user.create)



export default routes
