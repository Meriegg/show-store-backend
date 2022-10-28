import { gql } from "apollo-server-express";

export default gql`
  type Product {
    _id: ID!
    productName: String!
    price: Float!
    typesID: [String!]
    images: [String!]
    imageAlignment: String
  }

  type Query {
    getProducts: [Product!]!
    getProduct(productId: ID!): Product!
  }

  type Mutation {
    createProduct(data: CreateProductInput!): Product!
    deleteProduct(productId: ID!): Product!
    updateProduct(args: UpdateProductInput!): Product!
  }

  input CreateProductInput {
    productName: String!
    price: Float!
    typesID: [String!]!
    images: [String!]!
  }

  input UpdateProductInput {
    productId: ID!
    productData: CreateProductInput!
  }
`;
