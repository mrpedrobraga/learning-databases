import { PaymentSheet } from 'modules/payment_sheets/entities/payment_sheet.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne(() => PaymentSheet, (paymentSheet) => paymentSheet.clients)
  @JoinColumn({ name: 'payment_sheet_id' })
  payment_sheet: PaymentSheet;
}
