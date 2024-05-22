import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UrlService {
  constructor(private readonly configService: ConfigService) {}

  build(path: string) {
    return `${this.configService.get('BASE_URL')}${path}`;
  }
}
