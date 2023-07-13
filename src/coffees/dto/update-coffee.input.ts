import {
  ArrayMaxSize,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import * as GraphQLTypes from '../../graphql-types';

export class UpdateCoffeeInput extends GraphQLTypes.UpdateCoffeeInput {
  @MinLength(3)
  @MaxLength(30)
  @IsOptional()
  name: string;

  @MaxLength(30)
  @IsOptional()
  brand: string;
}
