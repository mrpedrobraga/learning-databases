import { Injectable } from '@nestjs/common';

export class Client {
  constructor(
    private readonly id: number,
    private readonly cpf: string,
    private readonly name: string,
  ) {}
}

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
