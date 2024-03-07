import { Module, ValidationPipe } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './db';
import { ActiveModule } from './modules/active/active.module';
import { UserModule } from './modules/user/user.module';
import { WeixinModule } from './modules/weixin/weixin.module';
import { AuthGuard } from './common/guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      async useFactory(configService: ConfigService) {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get('JWT_EXPIRES_IN'),
          },
        };
      },
      inject: [ConfigService],
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
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
