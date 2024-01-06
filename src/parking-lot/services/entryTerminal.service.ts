import { Injectable } from '@nestjs/common';
import { TicketService } from 'src/parking-lot/services/ticket.service';

@Injectable()
export class EntryGateService {
  constructor(private readonly ticketService: TicketService) {}

  getTicket(gateId: string, carNumber: string) {
    return this.ticketService.createTicket(carNumber);
  }
}
