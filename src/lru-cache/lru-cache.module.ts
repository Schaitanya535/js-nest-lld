import { Module } from '@nestjs/common';
import { LRUCacheService } from './lru-cache.service';
import { LruCacheController } from './lru-cache.controller';

@Module({
  controllers: [LruCacheController],
  providers: [LRUCacheService],
})
export class LruCacheModule {}
