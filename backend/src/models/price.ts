export default class Price {
  constructor(currency: string, amount: number, decimals: number) {
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }

  currency: string;
  amount: number;
  decimals: number;
}
