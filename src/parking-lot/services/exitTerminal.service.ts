import { TicketService } from './ticket.service';
import { Injectable } from '@nestjs/common';
import { PaymentService } from 'src/parking-lot/services/payment.service';

@Injectable()
export class ExitTerminalService {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly ticketService: TicketService,
  ) {}

  getCost(ticketId: string) {
    const ticket = this.ticketService.getTicket(ticketId);
    ticket.setExitTime(new Date());
    const timeTaken =
      ticket.getExitTime().getTime() - ticket.getEntryTime().getTime();
    const cost = timeTaken * 0.1;
    return cost;
  }

  pay(ticketId: string) {
    // const ticket = this.ticketService.getTicket(ticketId);
    const cost = this.getCost(ticketId);
    this.paymentService.pay({
      paymentType: 'creditCard',
      amount: cost,
      paymentDetails: {
        cardNumber: '1234567890123456',
        expiryDate: '12/21',
        cvv: '123',
        cardHolderName: 'John Doe',
      },
    });
  }
}
