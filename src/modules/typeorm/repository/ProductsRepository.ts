import { Repository, EntityRepository } from "typeorm";
import Products from '../entities/Products'
import {ProductsInterface} from '../protocols/ProductsInterface'

@EntityRepository(Products)
export default class ProductsRepository  extends Repository<Products> implements ProductsInterface{

  public async findId(id:string):Promise<Products | undefined>{

    const index = this.findOne({where:{
      id
    }})

    return index;
  }

  public async findAll(): Promise<Products[] | undefined> {

      const all = this.find({})

      return all
  }

  public async findName(name:string): Promise<Products | undefined> {

    const nome = this.findOne({where:{
      name
    }})

    return nome
}
}
