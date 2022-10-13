import { merge } from "lodash";
import productResolvers from "./products";
import errorReportResolvers from "./errorReport";

export default merge(productResolvers, errorReportResolvers);
