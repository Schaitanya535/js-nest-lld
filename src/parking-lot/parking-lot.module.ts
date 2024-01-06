import { Module } from '@nestjs/common';
import { ParkingLotService } from './services/parking-lot.service';
import { ParkingLotController } from './parking-lot.controller';
import { EntryGateService } from 'src/parking-lot/services/entryTerminal.service';
import { ExitTerminalService } from 'src/parking-lot/services/exitTerminal.service';
import { PaymentService } from 'src/parking-lot/services/payment.service';
import { TicketService } from 'src/parking-lot/services/ticket.service';

@Module({
  controllers: [ParkingLotController],
  providers: [
    ParkingLotService,
    EntryGateService,
    ExitTerminalService,
    PaymentService,
    TicketService,
  ],
})
export class ParkingLotModule {}
