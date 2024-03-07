import { ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common';
import { IS_PUBLIC_KEY } from 'src/constants';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const UserId = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user_id;
});
