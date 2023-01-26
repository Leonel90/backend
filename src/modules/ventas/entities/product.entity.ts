import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products',{schema:'ventas'})
export class ProductEntity {
    @PrimaryGeneratedColumn('sv'),
    id:number;
    @CreateDateColumn({
        name: 'create_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt:Date;
    @UpdateDateColumn({
        name: 'update_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;
    @DeleteDateColumn({
        name: 'delete_date',
        type: 'timestamp',
        nullable: true,
    })
    deteleAt:Date;

    //Creación de las columnas del producto
    @Column('varchar', {
        name: 'title',
        comment:'Nombre del producto'
    })
    title:string;

    @Column('number', {
        name: 'price',
        comment:'Precios con 2 decimales del producto'
    })
    price:number;

    @Column('text',{
        name: 'description',
        comment:'Descripcion del producto'
    })
    description:string;
}