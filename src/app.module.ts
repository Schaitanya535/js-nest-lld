import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderBoardModule } from './leaderboard/leaderboard.module';
import { BrowserHistoryModule } from './browser-history/browser-history.module';
import { LruCacheModule } from './lru-cache/lru-cache.module';
import { ParkingLotModule } from './parking-lot/parking-lot.module';

@Module({
  imports: [
    LeaderBoardModule,
    BrowserHistoryModule,
    LruCacheModule,
    ParkingLotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
