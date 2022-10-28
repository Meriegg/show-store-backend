import Order from "../../db/models/order";
import { ApolloError } from "apollo-server-express";

interface CreateOrderProps {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phoneNum: String;
  state: string;
  homeAddress: string;
  stringifiedOrder: string;
  createdAt: string;
}

export default {
  Query: {
    getAllOrders: async () => {
      const orders = await Order.find();
      if (!orders) {
        throw new ApolloError("Could not get any orders!");
      }

      return orders;
    },
    getOrder: async (_: any, { orderId }: { orderId: string }) => {
      const order = await Order.findById(orderId);
      if (!order) {
        throw new ApolloError("Could not get order!");
      }

      return order;
    },
  },
  Mutation: {
    createOrder: async (_: any, { args }: { args: CreateOrderProps }) => {
      console.log(args);
      const newOrder = await new Order({ ...args, createdAt: Date.now() }).save();
      console.log(newOrder);

      return newOrder;
    },
    deleteOrder: async (_: any, { orderId }: { orderId: string }) => {
      const deletedOrder = await Order.findByIdAndDelete(orderId);

      return deletedOrder;
    },
  },
};
