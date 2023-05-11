import { Injectable } from '@nestjs/common';
import { PaymentSheet, PaymentStatus } from './entities/payment_sheet.entity';
import { CreatePaymentSheetDTO } from './dto/create_payment_sheet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'modules/clients/entities/client.entity';
import { PaymentSheetInfoDTO } from './dto/payment_sheet_info.dto';

@Injectable()
export class PaymentSheetsService {
  constructor(
    @InjectRepository(PaymentSheet)
    private paymentSheetRepository: Repository<PaymentSheet>,
  ) {}

  async getSheets() {
    const sheets: Array<PaymentSheet> = await this.paymentSheetRepository.find({
      relations: {
        clients: true,
      },
      select: {
        id: true,
        name: true,
        clients: {
          id: true,
        },
        due_date: true,
        amount: true,
        status: true,
      },
    });

    const paymentSheetsInfo: Array<PaymentSheetInfoDTO> = sheets.map(
      (sheet) => new PaymentSheetInfoDTO(sheet),
    );

    return paymentSheetsInfo;
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
