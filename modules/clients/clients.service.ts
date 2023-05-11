import { HttpException, Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentSheet } from 'modules/payment_sheets/entities/payment_sheet.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
    @InjectRepository(PaymentSheet)
    private paymentSheetRepository: Repository<PaymentSheet>,
  ) {}

  async getClients() {
    return await this.clientsRepository.find();
  }

  async getClientCount() {
    return await this.clientsRepository.count();
  }

  async addClient(body: object) {
    const entity = this.clientsRepository.create(body);
    this.clientsRepository.save(entity);
  }

  async assignPaymentSheetToClient(
    client_id: number,
    payment_sheet_id: number,
  ) {
    const paymentSheetCount: number = await this.paymentSheetRepository.count({
      where: { id: payment_sheet_id },
      skip: 0,
      take: 1,
    });

    if (!paymentSheetCount) throw new HttpException('Dude, this payment sheet does not exist.', 404);

    this.clientsRepository.update(client_id, {
      payment_sheet_id: payment_sheet_id,
    });
  }
}
