import { Injectable } from '@nestjs/common';

@Injectable()
export class BrowserHistoryService {
  private history: string[] = [];
  private current: number = 0;
  private max: number = 0;

  visit(url: string) {
    this.history.splice(this.current, this.max - this.current, url);
    this.current++;
    this.max = this.current;
  }

  back(steps: number): string {
    this.current = Math.max(0, this.current - steps);
    return this.history[this.current];
  }

  forward(steps: number): string {
    this.current = Math.min(this.max, this.current + steps);
    return this.history[this.current];
  }
}
