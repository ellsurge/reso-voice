import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions:CorsOptions = {
  origin: 'http://localhost:3000',
  methods:['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders:['Content-type', 'Authorization']
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions)
  await app.listen(3001);
}
bootstrap();
