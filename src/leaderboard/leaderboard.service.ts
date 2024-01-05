import { PriorityQueue } from 'datastructures-js';
import { Injectable } from '@nestjs/common';
import { AddPlayerScoreDto } from 'src/leaderboard/dto/add-player-score.dto';

@Injectable()
export class LeaderboardService {
  private leaderBoard = new Map<string, number>();

  sumOfTopKScores(k: number) {
    const minHeap = new PriorityQueue<number>((a, b) => a - b);
    for (const score of this.leaderBoard.values()) {
      minHeap.enqueue(score);
      if (minHeap.size() > k) {
        minHeap.dequeue();
      }
    }

    return minHeap.toArray().reduce((a, b) => a + b, 0);
  }

  addScore(playerScore: AddPlayerScoreDto) {
    if (!this.leaderBoard.has(playerScore.playerId)) {
      this.leaderBoard.set(playerScore.playerId, 0);
    } else {
      const currentScore = this.leaderBoard.get(playerScore.playerId);
      this.leaderBoard.set(
        playerScore.playerId,
        currentScore + playerScore.score,
      );
    }
    return this.leaderBoard.get(playerScore.playerId);
  }

  resetPlayerScore(playerId: string) {
    this.leaderBoard.set(playerId, 0);
  }
}
