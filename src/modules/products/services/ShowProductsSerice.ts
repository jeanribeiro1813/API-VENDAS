import { getCustomRepository } from "typeorm";
import Products from "../../typeorm/entities/Products";
import ProductsRepository from "../../typeorm/repository/ProductsRepository";



export default class CreateProducts{
  public async All() : Promise<Products[] | undefined>{

    const createProducts = getCustomRepository(ProductsRepository)

    const result = await createProducts.findAll()

    return result

  }
}
