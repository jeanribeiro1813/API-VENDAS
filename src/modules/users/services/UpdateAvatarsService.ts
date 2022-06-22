import {AppErrors} from '../../../shared/errors/AppErrors';
import path from 'path';
import fs from 'fs';
import { getCustomRepository } from 'typeorm';
import Users from '../../typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repository/UsersRepository';
import uploadConfig from '@config/upload';


interface IRequest{
  user_id:string,
  avatarFilename:string
}

export default class UpdateAvatars {

  public async execute({user_id,avatarFilename}:IRequest):Promise<Users>{

    const userRepository = getCustomRepository(UsersRepository)

    const result = await userRepository.findId(user_id)


    if(!result){
      throw new AppErrors('Não existe esse ID',404)
    }

    if(result.avatar){

      const userAvatarFilePath = path.join(uploadConfig.directory, result.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if(userAvatarFileExists){

        await fs.promises.unlink(userAvatarFilePath);

      }


    }

    result.avatar = avatarFilename

    await userRepository.save(result)


    return result
  }
}
