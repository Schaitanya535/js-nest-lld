import { Controller } from '@nestjs/common';
import { ParkingLotService } from './services/parking-lot.service';

@Controller('parking-lot')
export class ParkingLotController {
  constructor(private readonly parkingLotService: ParkingLotService) {}
}
