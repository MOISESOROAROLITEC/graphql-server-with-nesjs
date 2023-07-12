import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!, i'm the default route for <strong>graphql</strong> formation with <strong>nestJS</strong>";
  }
}
