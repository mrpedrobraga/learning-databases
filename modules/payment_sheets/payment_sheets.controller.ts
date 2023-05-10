import { Controller, Get } from '@nestjs/common';
import { PaymentSheetsService } from './payment_sheets.service';
import { PaymentSheet } from './entities/payment_sheet.entity';

@Controller('payment_sheets')
export class PaymentSheetsController {
  constructor(private readonly paymentSheetsService: PaymentSheetsService) {}

  @Get()
  getAllSheets(): Array<PaymentSheet> {
    return this.paymentSheetsService.getSheets();
  }
}
