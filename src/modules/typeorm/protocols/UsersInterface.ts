import Users from "../entities/Users";

export interface UsersInterface {
  findId(id:string): Promise<Users | undefined>
  findAll(): Promise<Users[] | undefined>
  findName(name:string): Promise<Users | undefined>
  findEmail(email:string): Promise<Users | undefined>

}
