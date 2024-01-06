import { Injectable } from '@nestjs/common';

@Injectable()
export class LRUCacheService {
  private cache: Map<string, string>;
  constructor() {
    this.cache = new Map<string, string>();
  }
}
