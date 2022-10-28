import { gql } from "apollo-server-express";

export default gql`
  type ProductType {
    _id: ID!
    typeName: String!
  }

  type Query {
    getAllTypes: [ProductType!]!
  }

  type Mutation {
    createType(args: CreateTypeInput!): ProductType!
    deleteType(typeId: ID!): ProductType!
    editType(args: EditTypeInput!): ProductType!
  }

  input CreateTypeInput {
    typeName: String!
  }

  input EditTypeInput {
    typeName: String!
    typeId: ID!
  }
`;
