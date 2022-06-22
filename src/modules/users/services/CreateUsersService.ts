import { AppErrors } from "../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Users from "../../typeorm/entities/Users";
import UsersRepository from "../../typeorm/repository/UsersRepository";
import { hash } from "bcryptjs";

interface IRequest{
  name:string,
  email:string,
  password:string
}


export default class CreateProducts{
  public async execute({name, email, password}:IRequest) : Promise<Users | AppErrors>{

    const createUsers = getCustomRepository(UsersRepository)

    const result = await createUsers.findEmail(email)

    if(result){
      throw new AppErrors('Já existe esse produto',404)
    }

    const hashPassword = await hash(password, 8)

    const user =  createUsers.create({
      name,
      email,
      password : hashPassword
    })

    await createUsers.save(user)

    return user

  }
}
