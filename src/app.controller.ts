import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
@Controller()
export class AppController {
  //get PORT from .env
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  // render view home.ejs
  @Get()
  @Render('home')
  getHome(): { title: string; message: string } {
    const message = this.appService.getMessage();
    return {
      title: 'Home page ',
      message: message,
    };
  }
}
