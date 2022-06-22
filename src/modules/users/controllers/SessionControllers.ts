import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService'



export default class ProductController{



  public async create(req: Request,res:Response):Promise<Response>{

    const {
      email,
      password} = req.body;

    const criar = new CreateSessionService()

    const result = await criar.execute({
      email,
      password
    })


    return res.json(result)

  }



}
