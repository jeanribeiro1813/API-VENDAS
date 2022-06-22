import { getCustomRepository } from "typeorm";
import Products from "../../typeorm/entities/Products";
import ProductsRepository from "../../typeorm/repository/ProductsRepository";
import { AppErrors } from '../../../shared/errors/AppErrors';

interface IRequest{
  id:string;
}

export default class CreateProducts{
  public async index({id}:IRequest) : Promise<Products | undefined>{

    const createProducts = getCustomRepository(ProductsRepository)

    const result = await createProducts.findId(id)

    if(!result){
      throw new AppErrors('Não existe esse ID',409)
    }

    return result

  }
}
