import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dto/create_client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getAllClients(): Promise<Array<Client>> {
    return this.clientsService.getClients();
  }

  @Get('/count')
  getClientCount(): Promise<number> {
    return this.clientsService.getClientCount();
  }

  @Post()
  addClient(@Body() createClientDTO: CreateClientDTO) {
    if (createClientDTO.name) {
      this.clientsService.addClient(createClientDTO);
      return createClientDTO;
    }
    throw new HttpException('Dude, set a name for your client.', 400);
  }
}
