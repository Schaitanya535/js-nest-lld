import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/parking-lot/entities/tickets.entity';

@Injectable()
export class TicketService {
  private tickets: Map<string, Ticket>;
  constructor() {
    this.tickets = new Map<string, Ticket>();
  }

  public createTicket(plateNumber: string) {
    const ticket = new Ticket(plateNumber);
    this.tickets.set(ticket.getId(), new Ticket(plateNumber));
    return ticket;
  }

  public getTicket(ticketId: string) {
    return this.tickets.get(ticketId);
  }
}
