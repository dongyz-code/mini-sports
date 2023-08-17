import { Module } from '@nestjs/common';
import { PostModule } from './modules/posts/post.module';
import { PrismaModule } from 'src/db//index';

@Module({
  imports: [PostModule, PrismaModule],
})
export class AppModule {}
