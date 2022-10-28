import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: String,
  price: Number,
  images: {
    type: [String],
    default: [],
  },
  typesID: {
    type: [String],
    default: [],
  },
  imageAlignment: {
    type: String,
    enum: ["top", "center", "bottom"],
  },
});

export default model("Products", productSchema);
