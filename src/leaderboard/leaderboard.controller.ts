import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddPlayerScoreDto } from 'src/leaderboard/dto/add-player-score.dto';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get('/top/:kNumbers')
  findTopK(@Param('kNumbers') k: number) {
    return this.leaderboardService.sumOfTopKScores(k);
  }

  @Post('/add')
  addScore(@Body() playerScore: AddPlayerScoreDto) {
    return this.leaderboardService.addScore(playerScore);
  }

  @Post('/reset/:playerId')
  resetPlayerScore(@Param('playerId') playerId: string) {
    return this.leaderboardService.resetPlayerScore(playerId);
  }
}
