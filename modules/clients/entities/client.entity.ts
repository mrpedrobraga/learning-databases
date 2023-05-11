import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
  constructor(id, cpf, name, payment_sheet_id) {
    this.id = id,
    this.cpf = cpf,
    this.name = name,
    this.payment_sheet_id = payment_sheet_id
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  cpf: string

  @Column()
  name: string

  @Column()
  payment_sheet_id: number
}
