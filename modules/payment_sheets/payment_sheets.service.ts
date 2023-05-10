import { Injectable } from '@nestjs/common';
import { PaymentSheet } from './entities/payment_sheet.entity';

@Injectable()
export class PaymentSheetsService {
  getSheets(): Array<PaymentSheet> {
    return null;
  }
}
