import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingLotService {
  private parkingLot: Map<string, string>;
  constructor() {
    this.parkingLot = new Map<string, string>();
  }
}
