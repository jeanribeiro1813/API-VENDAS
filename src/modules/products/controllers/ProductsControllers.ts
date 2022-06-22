import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductsService'
import DeleteProductService from '../services/DeleteProductsService';
import ShowProductsSerice from '../services/ShowProductsSerice';
import UpdateProductsService from '../services/UpdateProductsService';
import IndexProductsService from '../services/IndexProductsService';



export default class ProductController{


  public async index(req: Request,res: Response){

    const {id} = req.params

    const indexProducts = new IndexProductsService()

    const result = await indexProducts.index({id})

    return res.json(result)

  }
  public async create(req: Request,res:Response){

    const { name,
      price,
      quantity} = req.body;

    const criar = new CreateProductService()

    const result = await criar.execute({
      name,
      price,
      quantity,
    })

    if(result instanceof Error){
      return res.status(400).json(result.message);
 }

    return res.json(result)

  }

  public async update (req:Request, res:Response){

    const {id} = req.params

    const { name,
      price,
      quantity} = req.body

      const up = new UpdateProductsService()

      const result = await up.update({id,name,
        price,
        quantity})


        return res.json(result)

  }

  public async delete (req:Request, res:Response){

    const {id} = req.params

    const del = new DeleteProductService()

    await del.delete({id})

  }


  public async show (req:Request, res:Response){


      const all = new ShowProductsSerice()

      const result = await all.All()

      return res.json(result)

  }


}
