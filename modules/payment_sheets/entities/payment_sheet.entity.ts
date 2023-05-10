export class PaymentSheet {
  constructor(
    private readonly name: string,
    private readonly requests: number,
    private readonly due_date: string,
  ) {}
}
