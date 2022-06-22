import Products from "../entities/Products";

export interface ProductsInterface {
  findId(id:string): Promise<Products | undefined>
  findAll(): Promise<Products[] | undefined>
  findName(name:string): Promise<Products | undefined>
}
