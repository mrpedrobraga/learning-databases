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
    return await this.clientsRepository.find({
      relations: {
        payment_sheet: true,
      },
      select: {
        id: true,
        name: true,
        payment_sheet: {
          name: true,
        },
      },
    });
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
    const paymentSheet: PaymentSheet =
      await this.paymentSheetRepository.findOne({
        where: { id: payment_sheet_id },
      });

    if (!paymentSheet)
      throw new HttpException('Dude, this payment sheet does not exist.', 404);

    this.clientsRepository.update(client_id, {
      payment_sheet: paymentSheet,
    });
  }
}
