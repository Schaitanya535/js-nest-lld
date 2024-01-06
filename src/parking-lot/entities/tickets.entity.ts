type TPaymentStatus = 'PAID' | 'UNPAID';

export class Ticket {
  private id: string;
  private plateNumber: string;
  private entryTime: Date;
  private exitTime: Date;
  private paymentStatus: TPaymentStatus;

  constructor(plateNumber: string) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.plateNumber = plateNumber;
    this.entryTime = new Date();
    this.paymentStatus = 'UNPAID';
  }
  public getId(): string {
    return this.id;
  }
  public getPlateNumber(): string {
    return this.plateNumber;
  }
  public getEntryTime(): Date {
    return this.entryTime;
  }
  public getExitTime(): Date {
    return this.exitTime;
  }
  public setExitTime(exitTime: Date): void {
    this.exitTime = exitTime;
  }
  public getPaid() {
    return this.paymentStatus;
  }
  public setPaid(paid: TPaymentStatus): void {
    this.paymentStatus = paid;
  }
}
