import { Router } from 'express';
import usersRouter from '../controllers/UsersControllers';
import usersRouterAvatar from '../controllers/AvatarsControllers'
import isAutentication from '../../../shared/middlewares/isAutentication';
import multer from 'multer';
import Config from '../../../config/upload';


const routes =  Router()

const user = new usersRouter()

const avatar = new usersRouterAvatar()
const upload = multer(Config);



routes.get('/show',isAutentication,user.show)



routes.post('/create',user.create)

routes.patch('/avatar',isAutentication, upload.single('avatar'),avatar.update)


export default routes

