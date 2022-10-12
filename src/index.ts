import express from "express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { connect } from "mongoose";
import { ApolloServer } from "apollo-server-express";

// Dotenv files
config();

const main = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: "5mb" }));

  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });

  await gqlServer.start();
  gqlServer.applyMiddleware({ app, cors: { origin: "*" } });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(
      `Server listening on Port ${PORT}. GQL server available on http://localhost:${PORT}/graphql`
    );
  });

  const DB_URI = process.env.DATABASE_URI;
  await connect(DB_URI || "", {
    autoIndex: true,
    autoCreate: true,
  }).catch((err) => {
    console.error(err);
    return;
  });
  console.log("Database Connected!");
};
main();
