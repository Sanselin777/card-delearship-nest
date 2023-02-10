import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, /* Is going to accept just the correct data */
    forbidNonWhitelisted: true, /* Is going to reject the data that is not correct */
  }));

  await app.listen(3000);
}
bootstrap();
