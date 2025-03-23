import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length : 100,
    })
    title: string

    @Column("text")
    description: string

    @Column({type:"boolean"})
    completed: boolean

    @Column({type:"date"})
    createdAt: string

}
