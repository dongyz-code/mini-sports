import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { map, tap } from 'rxjs/operators';
import { RedisService } from 'src/db/redis/redis.service';
import { of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(private readonly httpAdapterHost: HttpAdapterHost, private readonly redisService: RedisService) {}
  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const key = this.httpAdapterHost.httpAdapter.getRequestUrl(request);
    const value = await this.redisService.get(key);

    if (value) {
      return of(value);
    } else {
      return next.handle().pipe(
        tap((res) => {
          this.redisService.set(key, res);
        }),
      );
    }
  }
}
