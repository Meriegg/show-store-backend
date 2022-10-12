import Product from "@db/models/product";

interface CreateProductArgs {
  productName: string;
  price: number;
  types: string[];
  images: string[];
}

const resolvers = {
  Query: {},
  Mutation: {
    createProduct: async (_: any, args: CreateProductArgs) => {
      const { images, price, productName, types } = args;

      const newProduct = new Product({
        images,
        types,
        price,
        productName,
      });

      const savedProduct = await newProduct.save();

      return savedProduct;
    },
  },
};

export default resolvers;
