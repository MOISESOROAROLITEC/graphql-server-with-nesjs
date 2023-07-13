import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { DateScalar } from './coffees/scalar/date.scalar/date.scalar';
import { DrinkResolver } from './drink/drink.resolver';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      database: process.env.DB_NAME,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar, DrinkResolver],
})
export class AppModule {}
