import { gql } from "apollo-server-express";

export default gql`
  type AdminAuthResponse {
    authToken: String!
  }

  type Mutation {
    authorizeAccess(args: AuthorizeAccessInput!): AdminAuthResponse!
  }

  input AuthorizeAccessInput {
    password: String!
    adminKey: String!
  }
`;
