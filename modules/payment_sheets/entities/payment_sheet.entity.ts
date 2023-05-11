import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum PaymentStatus {
  PAID = 'PAID',
  SCHEDULED = 'SCHEDULED',
  FAILED = 'FAILED',
}

@Entity('payment_sheets')
export class PaymentSheet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  due_date: string

  @Column()
  amount: number

  @Column()
  status: PaymentStatus
}
