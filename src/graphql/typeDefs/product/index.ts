import { gql } from "apollo-server-express";

export default gql`
  type Product {
    _id: ID!
    productName: String!
    price: Float!
    types: [String!]
    images: [String!]
  }

  type Query {
    getProducts: [Product!]!
    getProduct(productId: ID!): Product!
  }

  type Mutation {
    createProduct(data: CreateProductInput!): Product!
  }

  input CreateProductInput {
    productName: String!
    price: Float!
    types: [String!]!
    images: [String!]!
  }
`;
