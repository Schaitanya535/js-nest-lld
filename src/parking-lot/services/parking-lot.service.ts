import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingLotService {
  private parkingLot: Map<string, string>;
  constructor() {
    this.parkingLot = new Map<string, string>();
  }

  public getParkingSpot(terminalNo: string, plateNumber: string) {
    this.parkingLot.set(terminalNo, plateNumber);
    return 'spot1';
  }
}

export interface ParkingLotStrategy {
  getParkingSpot(terminalNo: string): string;
}
