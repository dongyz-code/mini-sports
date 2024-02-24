import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor, HttpExceptionFilter } from './common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalFilters(new HttpExceptionFilter());

    const swaggerConfig = new DocumentBuilder().build();
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('doc', app, swaggerDocument);

    await app.listen(3000);

    Logger.log(`server is runing at http://localhost:${3000}`, 'Server');
  } catch (e) {
    Logger.error(e);

    process.exit(1);
  }
}
bootstrap();
