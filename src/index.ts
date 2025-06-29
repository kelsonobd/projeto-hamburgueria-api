import { ApolloServer } from 'apollo-server';
import { sequelize } from './database';
import typeDefs from './schema/typeDefs';
import resolvers from './resolvers';
import { Hamburguer } from './models/Hamburguer';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    models: {
      Hamburguer,
    },
  }),
});


sequelize.sync().then(() => {
  console.log('📦 Banco sincronizado com sucesso!')

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
