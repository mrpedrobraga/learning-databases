import { Injectable } from '@nestjs/common';
import { PaymentSheet, PaymentStatus } from './entities/payment_sheet.entity';

@Injectable()
export class PaymentSheetsService {
  sheets: Array<PaymentSheet> = [];

  constructor() {
    this.sheets.push(
      new PaymentSheet(
        'Folha 001',
        '2023-12-01',
        30000,
        PaymentStatus.SCHEDULED,
      ),
    );
  }

  getSheets(): Array<PaymentSheet> {
    return this.sheets;
  }
}
