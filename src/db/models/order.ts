import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  firstName: String,
  lastName: String,
  country: String,
  email: String,
  phoneNum: String,
  state: String,
  homeAddress: String,
  stringifiedOrder: String,
  createdAt: Date,
  cartTotal: Number,
});

export default model("Order", orderSchema);
