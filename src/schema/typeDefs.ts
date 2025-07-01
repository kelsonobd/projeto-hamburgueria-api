import { gql } from 'apollo-server';

const typeDefs = gql`
    type Hamburguer {
    id: ID!
    nome: String!
    descricao: String!
    preco: Float!
    imagem: String
    disponivel: Boolean
    categoria:String
    }

    type Usuario {
      id: ID!
      nome: String!
      email: String
    }

  type AuthPayload {
    token: String!
    usuario: Usuario!
  }


    type Query{
    hello: String
    hamburgueres:[Hamburguer!]
    }
 
    type Mutation {
    criarHamburguer(
    nome:String!
    descricao: String!
    preco: Float!
    imagem:String
    disponivel:Boolean
    categoria: String
  ): Hamburguer!

    deletarHamburguer(id:ID!): Boolean!

    editarHamburguer(
    id:ID! 
    nome: String!,
    descricao: String!
    preco: Float!
    imagem: String
    disponivel: Boolean
    categoria: String
  ): Hamburguer

  login(email: String!, senha: String!) : AuthPayload
}
`;








export default typeDefs