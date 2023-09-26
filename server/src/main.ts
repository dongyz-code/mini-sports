import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    Logger.log(`server is runing at http://localhost:${3000}`, 'Server');
  } catch (e) {
    Logger.error(e);
    process.exit(1);
  }
}
bootstrap();
