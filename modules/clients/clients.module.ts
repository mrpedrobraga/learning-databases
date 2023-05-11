import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { PaymentSheet } from 'modules/payment_sheets/entities/payment_sheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, PaymentSheet])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
