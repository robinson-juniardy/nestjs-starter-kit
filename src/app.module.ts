import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './schema/user.entity';
import { UsersModule } from './users/users.module';

const env = process.env

@Module({
  imports: [
    ConfigModule.forRoot({
       envFilePath: [".development.env", ".production.env"]
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.DATABASE_HOST,
      port: parseInt(env.DATABASE_PORT),
      username: env.DATABASE_USER,
      password: env.DATABASE_PASS,
      database: env.DATABASE_NAME,
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
