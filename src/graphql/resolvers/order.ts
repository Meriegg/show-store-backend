import Order from "../../db/models/order";
import { censorString } from "../../utils/censorString";
import { ApolloError } from "apollo-server-express";

interface CreateOrderProps {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phoneNum: string;
  state: string;
  homeAddress: string;
  stringifiedOrder: string;
  createdAt: string;
}

export default {
  Query: {
    getAllOrders: async () => {
      const prevDate = new Date();
      prevDate.setDate(prevDate.getDate() - 2);
      await Order.deleteMany({
        createdAt: {
          $lt: prevDate,
        },
      });

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
      const safeArgs: typeof args = {
        country: censorString(args.country, 3),
        createdAt: Date.now().toString(),
        email: censorString(args.email, 4),
        firstName: args.firstName,
        lastName: censorString(args.lastName, 2),
        homeAddress: censorString(args.homeAddress, 4),
        phoneNum: censorString(args.phoneNum, 3),
        state: censorString(args.state, 2),
        stringifiedOrder: args.stringifiedOrder,
      };

      const newOrder = await new Order({ ...safeArgs }).save();

      return newOrder;
    },
    deleteOrder: async (_: any, { orderId }: { orderId: string }) => {
      const deletedOrder = await Order.findByIdAndDelete(orderId);

      return deletedOrder;
    },
  },
};
