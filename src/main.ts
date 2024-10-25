import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

dotenv.config();
async function bootstrap() {
  console.log('SENTRY_DSN:', process.env.SENTRY_DSN);
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [nodeProfilingIntegration()],
    tracesSampleRate: 1.0, // Capture 100% of the transactions
    profilesSampleRate: 1.0, // Set sampling rate for profiling
  });
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
