type TParkingSpotStatus = 'occupied' | 'vacant';

export class ParkingSpot {
  id: string;
  status: TParkingSpotStatus;
  ticketId: string | null;
  constructor(id: string) {
    this.id = id;
    this.status = 'vacant';
    this.ticketId = null;
  }
}
