export enum PaymentStatus {
  PAID = 'PAID',
  SCHEDULED = 'SCHEDULED',
  FAILED = 'FAILED',
}

export class PaymentSheet {
  constructor(
    private readonly name: string,
    private readonly requests: number,
    private readonly due_date: string,
    private readonly amount: number,
    private readonly status: PaymentStatus,
  ) {}
}
