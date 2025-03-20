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

    @Column()
    completed: boolean

    @Column()
    createdAt: Date

}
