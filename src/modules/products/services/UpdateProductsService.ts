import { AppErrors } from "../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Products from "../../typeorm/entities/Products";
import ProductsRepository from "../../typeorm/repository/ProductsRepository";

interface IRequest{
  id:string;
  name:string,
  price:number,
  quantity:number
}


export default class CreateProducts{
  public async update({id,name, price, quantity}:IRequest) : Promise<Products | AppErrors>{

    const createProducts = getCustomRepository(ProductsRepository)

    const result = await createProducts.findOne(id)

    if(!result){
      throw new AppErrors('Não existe esse produto',409)
    }


    result.name = name ? name : result.name
    result.price = price ?  price : result.price
    result.quantity = quantity ? quantity : result.quantity


    await createProducts.save(result)

    return result


  }
}
