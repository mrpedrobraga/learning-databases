import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
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
}
