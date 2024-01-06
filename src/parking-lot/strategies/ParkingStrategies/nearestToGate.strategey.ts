import { ParkingLotStrategy } from 'src/parking-lot/services/parking-lot.service';

export class NearestToGateStrategy implements ParkingLotStrategy {
  getParkingSpot(terminalNo: string): string {
    console.log('getting parking spot for terminal ', terminalNo);
    return 'A1';
  }
}
