import { PaymentSheet, PaymentStatus } from '../entities/payment_sheet.entity';

export class PaymentSheetInfoDTO {
  id: number;
  name: string;
  due_date: string;
  client_count: number;
  status: PaymentStatus;

  constructor(sheet: PaymentSheet) {
    this.id = sheet.id;
    this.name = sheet.name;
    this.due_date = sheet.due_date;
    this.client_count = sheet.clients.length;
    this.status = sheet.status;
  }
}
