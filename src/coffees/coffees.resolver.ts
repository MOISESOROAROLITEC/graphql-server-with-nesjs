import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import * as GraphQLTypes from '../graphql-types';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { UpdateCoffeeInput } from './dto/update-coffee.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class CoffeesResolver {
  constructor(
    private readonly coffeeService: CoffeesService,
    private readonly pubSub: PubSub,
  ) {}

  @Query('coffees')
  async findAll(): Promise<GraphQLTypes.Coffee[]> {
    return this.coffeeService.findAll();
  }

  @Query('coffee')
  async findOne(
    @Args('id', ParseIntPipe) id: number,
  ): Promise<GraphQLTypes.Coffee> {
    return this.coffeeService.findOne(id);
  }

  @Mutation('createCoffee')
  async create(
    @Args('createCoffeeInput', { nullable: true })
    createCoffeeInput: CreateCoffeeInput,
  ): Promise<GraphQLTypes.Coffee> {
    return this.coffeeService.create(createCoffeeInput);
  }

  @Mutation('updateCoffee')
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateCoffeeInput')
    updateCoffeeInput: UpdateCoffeeInput,
  ): Promise<GraphQLTypes.Coffee> {
    return this.coffeeService.update(id, updateCoffeeInput);
  }

  @Mutation('removeCoffee')
  async remove(
    @Args('id', ParseIntPipe) id: number,
  ): Promise<GraphQLTypes.Coffee> {
    return this.coffeeService.remove(id);
  }

  @Subscription('coffeeAdded')
  coffeeAdded() {
    return this.pubSub.asyncIterator('coffeeAdded');
  }
}
