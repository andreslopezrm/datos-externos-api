import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import { UrlService } from './url.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [StatisticsController],
  providers: [UrlService, StatisticsService],
})
export class StatisticsModule {}
