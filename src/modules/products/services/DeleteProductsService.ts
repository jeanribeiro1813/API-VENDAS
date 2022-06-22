import { AppErrors } from "../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import ProductsRepository from "../../typeorm/repository/ProductsRepository";


interface IRequest{
  id:string
}


export default class DeleteProducts{
  public async delete({id}:IRequest): Promise<void>{

    const deleteProducts = getCustomRepository(ProductsRepository)

    const result = await deleteProducts.findOne({id})

    if(!result){
      throw new AppErrors('Não existe esse ID',409)
    }

    await deleteProducts.remove(result)
  }
}
