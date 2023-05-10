import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  clients: Array<Client> = [];

  constructor() {
    this.clients.push(new Client(1, '000.000.000-00', 'Danilo'));
    this.clients.push(new Client(66, '000.000.000-01', 'Mazur'));
  }

  getClients(): Array<Client> {
    return this.clients;
  }

  getClientCount(): number {
    return this.clients.length;
  }
}