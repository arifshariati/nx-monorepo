import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  create(@Body() {text}: {text: string}) {
    return this.appService.add(text);
  }

  @Post('setDone')
  setDone(@Body() {id, done}: {id: number, done: boolean}) {
    return this.appService.setDone(id, done);
  }
}
