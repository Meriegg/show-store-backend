import { gql } from "apollo-server-express";

export default gql`
  type ErrorReport {
    stringifiedError: String!
    reportedOn: String!
    _id: ID!
  }

  type Query {
    getAllReports: [ErrorReport!]!
    getErrorReport(reportId: ID!): ErrorReport!
  }

  type Mutation {
    reportError(stringifiedError: String!): ErrorReport!
  }
`;
