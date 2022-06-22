import { Repository, EntityRepository } from "typeorm";
import Users from '../entities/Users'
import { UsersInterface } from "../protocols/UsersInterface";

@EntityRepository(Users)
export default class UsersRepository  extends Repository <Users>  implements UsersInterface {

  public async findId(id:string): Promise<Users | undefined>{

    const result = this.findOne({where:{id}})

    return result
  }

  public async findName(name:string): Promise<Users | undefined>{

    const result = this.findOne({where:{name}})

    return result
  }

  public async findAll(): Promise<Users[] | undefined>{

    const result = this.find({})

    return result
  }

  public async findEmail(email:string): Promise<Users | undefined>{

    const result = this.findOne({where:{email}})

    return result
  }
}
