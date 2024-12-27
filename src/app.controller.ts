import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { LocalAuthGuard } from './auth/local-auth.guard';
@Controller()
export class AppController {
  //get PORT from .env
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  handleLogin(@Req() req: any) {
    return req.user;
  }
}
