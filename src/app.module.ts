import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentSheetsModule } from 'modules/payment_sheets/payment_sheets.module';
import { ClientsModule } from 'modules/clients/clients.module';

@Module({
  imports: [ClientsModule, PaymentSheetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
