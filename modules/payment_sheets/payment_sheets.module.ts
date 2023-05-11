import { Module } from '@nestjs/common';
import { PaymentSheetsController } from './payment_sheets.controller';
import { PaymentSheetsService } from './payment_sheets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentSheet } from './entities/payment_sheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentSheet])],
  controllers: [PaymentSheetsController],
  providers: [PaymentSheetsService],
})
export class PaymentSheetsModule {}
