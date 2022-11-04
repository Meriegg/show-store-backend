import { gql } from "apollo-server-express";

export default gql`
  type Order {
    firstName: String!
    lastName: String!
    country: String!
    email: String!
    phoneNum: String!
    state: String!
    homeAddress: String!
    stringifiedOrder: String!
    createdAt: String!
    cartTotal: Int!
    _id: ID!
  }

  type Query {
    getAllOrders: [Order!]!
    getOrder(orderId: ID!): Order!
  }

  type Mutation {
    createOrder(args: CreateOrderInput!): Order!
    deleteOrder(orderId: ID!): Order!
  }

  input CreateOrderInput {
    firstName: String!
    lastName: String!
    country: String!
    email: String!
    phoneNum: String!
    state: String!
    homeAddress: String!
    stringifiedOrder: String!
    cartTotal: Int!
  }
`;
