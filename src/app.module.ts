import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentSheetsModule } from 'modules/payment_sheets/payment_sheets.module';
import { ClientsModule } from 'modules/clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentSheet } from 'modules/payment_sheets/entities/payment_sheet.entity';
import { Client } from 'modules/clients/entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'clients',
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    ClientsModule,
    PaymentSheetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
