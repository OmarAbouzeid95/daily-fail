import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FailModule } from './fail/fail.module';
import { UserModule } from './user/user.module';
import { ReactionModule } from './reaction/reaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FailModule,
    UserModule,
    ReactionModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE_URL as string,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'development',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
