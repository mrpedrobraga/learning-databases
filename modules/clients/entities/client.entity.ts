export class Client {
  constructor(
    private readonly id: number,
    private readonly cpf: string,
    private readonly name: string,

    private readonly payment_sheet_id: number,
  ) {}
}
