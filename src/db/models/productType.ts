import { model, Schema } from "mongoose";

const productTypeSchema = new Schema({
  typeName: String,
});

export default model("ProductType", productTypeSchema);
