import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';
import * as GraphQLTypes from '../../graphql-types';
import { ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Flavor implements GraphQLTypes.Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Coffee, (coffees) => coffees.flavors)
  coffees: Coffee[];
}
