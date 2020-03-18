import { gql } from "apollo-server";
const typeDefs = gql`
  type Cat {
    id: ID!
    name: String!
    lastname: String
    breed: Breed!
  }
  type Query {
    getCat(id: ID!): Cat!
    cats: [Cat!]!
    getBreed: [Cat!]!
    getBreeds: [Cat!]!
  }
  enum Breed {
    PUSAKAL
    PERSIAN
  }

  input CreateCatInput {
    name: String!
    lastname: String
    breed: Breed!
  }
  input UpdateCatInput {
    id: ID!
    name: String!
    lastname: String
    breed: Breed!
  }

  type Mutation {
    createCat(cat: CreateCatInput!): Cat!
    deleteCat(id: ID!): Cat!
    updateCat(cat: UpdateCatInput): Cat!
  }
`;

export default typeDefs;
