import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', name: 'date_of_birth' })
    dateOfBirth: string;

    @Column({ type: 'int' })
    age: number;
}