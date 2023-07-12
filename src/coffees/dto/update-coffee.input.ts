import {
  ArrayMaxSize,
  IsOptional,
  MaxLength,
  MinLength,
  maxLength,
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

  @ArrayMaxSize(10)
  @IsOptional()
  flavors: string[];
}
