import "dotenv/config";
import { ApolloServer } from 'apollo-server';
import { sequelize } from './database';
import typeDefs from './schema/typeDefs';
import resolvers from './resolvers';
import { Hamburguer } from './models/Hamburguer';
import criarUsuario from './models/Usuario';

const Usuario = criarUsuario(sequelize)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    models: {
      Hamburguer,
      Usuario,
    },
  }),
});

sequelize.sync().then(() => {
  console.log('📦 Banco sincronizado com sucesso!')

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
