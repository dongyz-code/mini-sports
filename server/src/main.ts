import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor, HttpExceptionFilter } from './common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  try {
    const adapter = new FastifyAdapter();
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

    app.setGlobalPrefix('api');
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalFilters(new HttpExceptionFilter());

    const swaggerConfig = new DocumentBuilder().build();
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, swaggerDocument);
    const configService = app.get(ConfigService);
    await app.listen(configService.get<number>('PORT'));

    Logger.log(`api docs is running at http://localhost:${3000}/docs`, 'main');
    Logger.log(`server is running at http://localhost:${3000}`, 'main');
  } catch (e) {
    Logger.error(e);
    process.exit(1);
  }
}
bootstrap();
