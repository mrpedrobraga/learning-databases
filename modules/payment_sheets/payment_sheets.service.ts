import { Injectable } from '@nestjs/common';
import { PaymentSheet, PaymentStatus } from './entities/payment_sheet.entity';
import { CreatePaymentSheetDTO } from './dto/create_payment_sheet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentSheetsService {
  constructor(
    @InjectRepository(PaymentSheet)
    private paymentSheetRepository: Repository<PaymentSheet>,
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

  async deleteSheet(id) {
    var sheets: Array<PaymentSheet> = await this.paymentSheetRepository.find({
      where: {
        id: id,
      },
    });
    this.paymentSheetRepository.remove(sheets);
    return sheets;
  }
}
