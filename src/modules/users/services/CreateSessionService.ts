import { AppErrors } from "../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../../typeorm/repository/UsersRepository";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import authConfig from "../../../config/auth";

interface IRequest{
  email:string,
  password:string,
}

interface IResponseDTO{
  token:string;
}

export default class CreateSession{
  public async execute({email, password}:IRequest) : Promise<IResponseDTO>{

    const createUsers = getCustomRepository(UsersRepository)

    const user = await createUsers.findEmail(email)

    if(!user){
      throw new AppErrors('Incorrect email/password',401)
    }

    const password_confirmation = await compare(password, user.password)

    if(!password_confirmation){
      throw new AppErrors('Incorrect email/password',401)
    }

    const token = sign({
      id: user.id,
    },
    authConfig.jwt.secret,
    {
      subject:user.id,
      expiresIn:authConfig.jwt.expireIn
    }
    )


    return {token}

  }
}
