import { Injectable } from '@nestjs/common';
import { UrlService } from './url.service';
import { HttpService } from '@nestjs/axios';
import { AvanceNacional } from './types/advance.type';
import { PresidenciaNacional } from './types/national.type';

@Injectable()
export class StatisticsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly urlService: UrlService,
  ) {}

  async national() {
    const [{ data: avance }, { data: national }] = await Promise.all([
      this.httpService.axiosRef.get<AvanceNacional>(
        this.urlService.build(
          '/publicacion/nacional/assets/presidencia/avanceNacional.json',
        ),
      ),
      this.httpService.axiosRef.get<PresidenciaNacional>(
        this.urlService.build(
          '/publicacion/nacional/assets/presidencia/presidenciaNacional.json',
        ),
      )
    ]);
    const { votosDistritos: { votos }} = national
    return { avance, votos };
  }
}
