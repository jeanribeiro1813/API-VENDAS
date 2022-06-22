import { AppErrors } from "../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Products from "../../typeorm/entities/Products";
import ProductsRepository from "../../typeorm/repository/ProductsRepository";

interface IRequest{
  name:string,
  price:number,
  quantity:number
}


export default class CreateProducts{
  public async execute({name, price, quantity}:IRequest) : Promise<Products | AppErrors>{

    const createProducts = getCustomRepository(ProductsRepository)

    const result = await createProducts.findName(name)

    if(result){
      throw new AppErrors('Já existe esse produto',404)
    }

    const product =  createProducts.create({
      name,
      price,
      quantity,
    })

    await createProducts.save(product)

    return product

  }
}
