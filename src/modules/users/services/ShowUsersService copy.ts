import { getCustomRepository } from "typeorm";
import Users from "../../typeorm/entities/Users";
import UsersRepository from "../../typeorm/repository/UsersRepository";



export default class CreateProducts{
  public async All() : Promise<Users[] | undefined>{

    const createProducts = getCustomRepository(UsersRepository)

    const result = await createProducts.findAll()

    return result

  }
}
