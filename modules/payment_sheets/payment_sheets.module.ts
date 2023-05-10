import { Module } from '@nestjs/common';
import { PaymentSheetsController } from './payment_sheets.controller';
import { PaymentSheetsService } from './payment_sheets.service';

@Module({
  imports: [],
  controllers: [PaymentSheetsController],
  providers: [PaymentSheetsService],
})
export class PaymentSheetsModule {}
