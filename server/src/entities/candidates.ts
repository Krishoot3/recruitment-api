import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Candidates extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id!: number;

    @Column({ type: "varchar", length: 50 })
    fullName!: string;

    @Column({ type: "int", width: 5 })
    salary!: number;

    @Column({ type: "varchar", length: 200 })
    skills!: string;
}