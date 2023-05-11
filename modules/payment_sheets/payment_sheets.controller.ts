import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
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
  addPaymentSheet(@Body() createPaymentSheetDTO: CreatePaymentSheetDTO) {
    if (createPaymentSheetDTO.name) {
      this.paymentSheetsService.addSheet(createPaymentSheetDTO);
      return createPaymentSheetDTO;
    }
    throw new HttpException('Dude, set a name for your payment sheet.', 400);
  }
}
