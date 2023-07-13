import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as GraphQLTypes from '../graphql-types';

@Resolver('Drink')
export class DrinkResolver {
  @Query('drinks')
  async findAll(): Promise<GraphQLTypes.Drink[]> {
    const coffee = new GraphQLTypes.Coffee();
    coffee.id = 1;
    coffee.name = 'Caffee au lait';
    coffee.brand = 'Nestlé';

    const tea = new GraphQLTypes.Tea();
    tea.name = 'Thé vert';

    return [tea, coffee];
  }

  @ResolveField()
  __resolveType(value: GraphQLTypes.Drink) {
    if ('brand' in value) {
      return 'Coffee';
    }
    return 'Tea';
  }
}
