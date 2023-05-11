import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class Client {
  constructor(params: Partial<Client>) {
    Object.assign(this, params);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  cpf: string;

  @Column()
  name: string;

  @Column()
  payment_sheet_id: number;
}
