import { Client } from 'modules/clients/entities/client.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum PaymentStatus {
  PAID = 'PAID',
  SCHEDULED = 'SCHEDULED',
  FAILED = 'FAILED',
}

@Entity('payment_sheets')
export class PaymentSheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  due_date: string;

  @Column()
  amount: number;

  @Column()
  status: PaymentStatus;

  @OneToMany(() => Client, (client) => client.payment_sheet)
  clients: Array<Client>;
}
