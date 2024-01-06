import { PaymentStrategy } from 'src/parking-lot/services/payment.service';

export class CashStrategy implements PaymentStrategy {
  pay(paymentDetails) {
    console.log('paying with cash ', paymentDetails.cash);
    return true;
  }
}
