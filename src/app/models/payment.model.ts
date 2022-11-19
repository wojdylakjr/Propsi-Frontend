export interface IPayment {
  id?: number;
  date?: Date;
  payUPaymentId?: string;
  amount?: number;
  payMethod?: string;
  currencyCode?: string;
  status?: string;
}
