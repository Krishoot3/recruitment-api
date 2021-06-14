import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id!: number;

    @Column({ type: "varchar", length: 50 })
    email!: string;

    @Column({ type: "varchar", length: 100 })
    password!: string;
}