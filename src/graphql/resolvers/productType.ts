import ProductType from "../../db/models/productType";
import { ApolloError } from "apollo-server-express";

interface CreateTypeArgs {
  typeName: String;
}

export default {
  Query: {
    getAllTypes: async () => {
      const types = await ProductType.find();
      if (!types) {
        throw new ApolloError("Could not get any types");
      }

      return types;
    },
  },
  Mutation: {
    createType: async (_: any, { args }: { args: CreateTypeArgs }) => {
      const newProductType = await new ProductType({ ...args }).save();

      return newProductType;
    },
    deleteType: async (_: any, args: { typeId: String }) => {
      const deletedType = await ProductType.findByIdAndDelete(args.typeId);

      return deletedType;
    },
    editType: async (_: any, { args }: { args: { typeId: string; typeName: string } }) => {
      const editedType = await ProductType.findByIdAndUpdate(args.typeId, {
        typeName: args.typeName,
      });

      return editedType;
    },
  },
};
