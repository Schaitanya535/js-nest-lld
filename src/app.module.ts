import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderBoardModule } from './leaderboard/leaderboard.module';
import { BrowserHistoryModule } from './browser-history/browser-history.module';

@Module({
  imports: [LeaderBoardModule, BrowserHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
