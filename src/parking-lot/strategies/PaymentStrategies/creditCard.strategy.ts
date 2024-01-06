import { PaymentStrategy } from 'src/parking-lot/services/payment.service';

export class CreditCardStrategy implements PaymentStrategy {
  pay(paymentDetails: any): boolean {
    console.log('paying with credit card ', paymentDetails.cardId);
    return true;
  }
}
