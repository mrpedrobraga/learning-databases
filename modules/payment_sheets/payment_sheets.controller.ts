import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Post,
  Query,
} from '@nestjs/common';
import { PaymentSheetsService } from './payment_sheets.service';
import { PaymentSheet } from './entities/payment_sheet.entity';
import { CreatePaymentSheetDTO } from './dto/create_payment_sheet.dto';

@Controller('payment_sheets')
export class PaymentSheetsController {
  constructor(private readonly paymentSheetsService: PaymentSheetsService) {}

  @Get()
  async getAllSheets(): Promise<Array<PaymentSheet>> {
    return await this.paymentSheetsService.getSheets();
  }

  @Post()
  async addPaymentSheet(@Body() createPaymentSheetDTO: CreatePaymentSheetDTO) {
    if (createPaymentSheetDTO.name) {
      this.paymentSheetsService.addSheet(createPaymentSheetDTO);
      return createPaymentSheetDTO;
    }
    throw new HttpException('Dude, set a name for your payment sheet.', 400);
  }

  @Delete()
  async deletePaymentSheet(@Query('id') id: number) {
    return await this.paymentSheetsService.deleteSheet(id);
  }
}
