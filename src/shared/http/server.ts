import 'reflect-metadata';

import express, {Request, Response, NextFunction}  from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '../../shared/http/routes/routes';
import {AppErrors} from '../../shared/errors/AppErrors';
import {errors} from 'celebrate';
import uploadConfig from '../../config/upload'
import '../../modules/typeorm'



const app = express();
app.use(cors());

// app.use(express.json({limit: '100mb'}));
// app.use(express.urlencoded({ extended: true, limit: '100mb'}))
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);



app.use(errors());

app.use((error:Error , request:Request, response:Response, next:NextFunction) =>{

  console.log(error)
  if (error instanceof AppErrors){
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message
    });
  }

  return response.status(500).json({
    status:'Error Server',
    message: 'Erro no servidor Interno'
  })

}
)

const PORT = process.env.PORT || 3333;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});
