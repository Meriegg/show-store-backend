import { AuthenticationError } from "apollo-server-express";
import { GQLContext } from "../../types";

interface AuthorizeAccessArgs {
  adminKey: string;
  password: string;
}

export default {
  Mutation: {
    authorizeAccess: async ({ res }: GQLContext, { args }: { args: AuthorizeAccessArgs }) => {
      const ENV_ADMIN_KEY = process.env.ADMIN_KEY;
      const ENV_ADMIN_PASS = process.env.ADMIN_PASS;
      if (!ENV_ADMIN_KEY || !ENV_ADMIN_PASS) {
        throw new AuthenticationError("Something wrong happened on our end!");
      }

      const { adminKey, password } = args;

      if (adminKey !== ENV_ADMIN_KEY) {
        throw new AuthenticationError("Admin key is incorrect");
      }

      if (password !== ENV_ADMIN_PASS) {
        throw new AuthenticationError("Admin password is incorrect!");
      }
    },
  },
};
