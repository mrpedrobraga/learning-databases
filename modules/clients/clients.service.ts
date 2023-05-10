import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  clients: Array<Client> = [];

  constructor() {
    this.clients.push(new Client(1, '000.000.000-00', 'Danilo', 0));
    this.clients.push(new Client(66, '000.000.000-01', 'Mazur', 1));
  }

  getClients(): Array<Client> {
    return this.clients;
  }

  getClientCount(): number {
    return this.clients.length;
  }
}
