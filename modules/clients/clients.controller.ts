import { Controller, Get } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getAllClients(): Array<Client> {
    return this.clientsService.getClients();
  }

  @Get('/count')
  getClientCount(): number {
    return this.clientsService.getClientCount();
  }
}
