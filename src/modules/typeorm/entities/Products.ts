import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
}
from 'typeorm'


@Entity('products')
 class Products{

  @PrimaryGeneratedColumn('uuid')
  id!:string

  @Column()
  name!:string

  @Column('numeric')
  price!:number

  @Column('integer')
  quantity!:number

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;


}

export default Products
