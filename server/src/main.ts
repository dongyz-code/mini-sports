import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log(`server is run http://localhost:${3000}`);
  } catch (e) {}
}
bootstrap();
