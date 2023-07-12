import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Coffee, CreateCoffeeInput } from 'src/graphql-types';

@Resolver()
export class CoffeesResolver {
  @Query('coffees')
  async findAll(): Promise<Coffee[]> {
    return [];
  }

  @Query('coffee')
  async findOne(@Args('id', ParseIntPipe) id: number): Promise<Coffee> {
    return null;
  }

  @Mutation('createCoffee')
  async create(
    @Args('createCoffeeInput', { nullable: true })
    createCoffeeInput: CreateCoffeeInput,
  ): Promise<Coffee> {
    return null;
  }
}
