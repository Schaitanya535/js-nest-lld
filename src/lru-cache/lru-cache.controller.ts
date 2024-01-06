import { Controller } from '@nestjs/common';
import { LRUCacheService } from './lru-cache.service';

@Controller('lru-cache')
export class LruCacheController {
  constructor(private readonly lruCacheService: LRUCacheService) {}
}
