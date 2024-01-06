import { Injectable } from '@nestjs/common';
import { PaymentDetails } from 'src/parking-lot/entities/paymentDetails.entity';
import { CashStrategy } from 'src/parking-lot/strategies/PaymentStrategies/cash.strategy';
import { CreditCardStrategy } from 'src/parking-lot/strategies/PaymentStrategies/creditCard.strategy';

export interface PaymentStrategy {
  pay(paymentDetails: PaymentDetails): boolean;
}

@Injectable()
export class PaymentService {
  constructor() {}

  private getPaymentStrategy(paymentDetails: PaymentDetails): PaymentStrategy {
    if (paymentDetails.paymentType === 'creditCard') {
      return new CreditCardStrategy();
    } else if (paymentDetails.paymentType === 'cash') {
      return new CashStrategy();
    } else {
      throw new Error('Invalid payment details');
    }
  }

  pay(paymentDetails: PaymentDetails) {
    const strategy = this.getPaymentStrategy(paymentDetails);
    return strategy.pay(paymentDetails);
  }
}
