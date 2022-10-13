import { model, Schema } from "mongoose";

const errorReportSchema = new Schema({
  reportedOn: Date,
  stringifiedError: String,
});

export default model("ErrorReport", errorReportSchema);
