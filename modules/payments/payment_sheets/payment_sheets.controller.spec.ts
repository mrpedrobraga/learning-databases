import { Test, TestingModule } from '@nestjs/testing';
import { PaymentSheetsController } from './payment_sheets.controller';

describe('PaymentSheetsController', () => {
  let controller: PaymentSheetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentSheetsController],
    }).compile();

    controller = module.get<PaymentSheetsController>(PaymentSheetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
