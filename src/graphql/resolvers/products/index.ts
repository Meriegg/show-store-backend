import Product from "../../../db/models/product";
import { ApolloError } from "apollo-server-express";

interface CreateProductArgs {
  productName: string;
  price: number;
  types: string[];
  images: string[];
}

const resolvers = {
  Query: {
    getProducts: async () => {
      const products = await Product.find();
      if (!products) {
        throw new ApolloError("Could not retrieve any products!");
      }

      return products;
    },
    getProduct: async (_: any, args: { productId: string }) => {
      const { productId } = args;

      const product = await Product.findById(productId);
      if (!product) {
        throw new ApolloError("Could not find product!");
      }

      return product;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: { data: CreateProductArgs }) => {
      const newProduct = new Product({
        ...args.data,
      });

      const savedProduct = await newProduct.save();

      return savedProduct;
    },
  },
};

export default resolvers;
