import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: String,
  price: Number,
  types: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
});

export default model("Products", productSchema);
