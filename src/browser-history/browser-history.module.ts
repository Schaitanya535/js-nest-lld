import { Module } from '@nestjs/common';
import { BrowserHistoryService } from './browser-history.service';
import { BrowserHistoryController } from './browser-history.controller';

@Module({
  controllers: [BrowserHistoryController],
  providers: [BrowserHistoryService],
})
export class BrowserHistoryModule {}
