import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healCheck(): string {
    return 'Hello world!!!';
  }
}
