import { Injectable } from '@nestjs/common';
import { PaymentSheet, PaymentStatus } from './entities/payment_sheet.entity';
import { CreatePaymentSheetDTO } from './dto/create_payment_sheet.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentSheetsService {
  constructor(
    @InjectRepository(PaymentSheet)
    private paymentSheetRepository,
  ) {}

  async getSheets() {
    return this.paymentSheetRepository.find();
  }

  async addSheet(createPaymentSheetDTO: CreatePaymentSheetDTO) {
    const newPaymentSheet = this.paymentSheetRepository.create(
      createPaymentSheetDTO,
    );
    this.paymentSheetRepository.save(newPaymentSheet);
  }
}
