import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/parking-lot/entities/tickets.entity';
import { ParkingLotService } from 'src/parking-lot/services/parking-lot.service';

@Injectable()
export class TicketService {
  private tickets: Map<string, Ticket>;
  constructor(private readonly parkingLotService: ParkingLotService) {
    this.tickets = new Map<string, Ticket>();
  }

  public createTicket(plateNumber: string) {
    const spotId = this.parkingLotService.getParkingSpot('gate1', plateNumber);
    const ticket = new Ticket(plateNumber, spotId);
    this.tickets.set(ticket.getId(), ticket);
    return ticket;
  }

  public getTicket(ticketId: string) {
    return this.tickets.get(ticketId);
  }
}
