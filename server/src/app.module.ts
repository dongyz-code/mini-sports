import { Module, ValidationPipe } from '@nestjs/common';
import { PrismaModule } from './db';
import { ActiveModule } from './modules/active/active.module';
import { UserModule } from './modules/user/user.module';
import { WeixinModule } from './modules/weixin/weixin.module';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ActiveModule,
    PrismaModule,
    UserModule,
    WeixinModule,
  ],

  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
