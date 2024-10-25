import { Catch, ExceptionFilter } from '@nestjs/common';
import { WithSentry } from '@sentry/nestjs';

@Catch()
export class YourCatchAllExceptionFilter implements ExceptionFilter {
  @WithSentry()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch(_exception: any, _host: any): void {
    // your implementation here
  }
}
