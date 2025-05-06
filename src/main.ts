import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import * as paintLine from 'colors';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('birds-microservice');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      options: {
        transport: 'TCP',
        options: {
          host: 'localhost',
          port: envs.port,
        },
      },
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen();
  logger.log(
    paintLine.magenta(`Birds microservice is running on port ${envs.port}`),
  );
}
bootstrap();
