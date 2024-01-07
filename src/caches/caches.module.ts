import { Module } from '@nestjs/common';
import { LRUCache } from './lru-cache.service';

@Module({
  providers: [LRUCache],
})
export class CachesModule {}
