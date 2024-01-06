type TPaymentType = 'cash' | 'creditCard' | 'upi';

export class PaymentDetails {
  paymentType: TPaymentType;
  amount: number;
  paymentDetails: CreditCardDetails | UPIPaymentDetails;
}

export class CreditCardDetails {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
}

export class UPIPaymentDetails {
  upiId: string;
}
