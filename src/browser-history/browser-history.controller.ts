import { Controller } from '@nestjs/common';
import { BrowserHistoryService } from './browser-history.service';

@Controller('browser-history')
export class BrowserHistoryController {
  constructor(private readonly browserHistoryService: BrowserHistoryService) {}
}
