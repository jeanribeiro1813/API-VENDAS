import { Request, Response } from 'express';
import CreateUsersService from '../services/CreateUsersService'
import ShowUsersService from '../services/ShowUsersService';



export default class ProductController{



  public async create(req: Request,res:Response){

    const { name,
      email,
      password} = req.body;

    const criar = new CreateUsersService()

    const result = await criar.execute({
      name,
      email,
      password
    })

    if(result instanceof Error){
      return res.status(400).json(result.message);
 }

    return res.json(result)

  }


  public async show (req:Request, res:Response){


      const all = new ShowUsersService()

      const result = await all.All()

      return res.json(result)

  }


}
