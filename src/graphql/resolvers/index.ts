import productResolvers from "./products";
import errorReportResolvers from "./errorReport";
import productTypeResolvers from "./productType";
import orderResolvers from "./order";
import adminAuthResolvers from "./adminAuth";
import { merge } from "lodash";

export default merge(
  productResolvers,
  errorReportResolvers,
  productTypeResolvers,
  orderResolvers,
  adminAuthResolvers
);
