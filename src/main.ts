import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './log.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 处理跨域
  app.enableCors();

  app.use(logger);

  await app.listen(3000);
}
bootstrap();
