import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 50,
        unique: true
    })
    email: string

    @Column({
        default: null,
        nullable: true,
        type: "varchar"
    })
    firstname: string

    @Column({
        default: null,
        nullable: true,
        type: "varchar"
    })
    lastname: string
    
    @Column({
        type: "varchar",
        length: 100,
    })
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}