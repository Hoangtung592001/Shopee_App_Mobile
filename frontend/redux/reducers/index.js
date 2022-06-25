import { combineReducers } from "redux";
import productlineReducer from "./productlineReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import orderReducer from "./orderReducer";
import orderCartReducer from "./orderCartReducer";
import voucherReducer from "./voucherReducer";
import judgeReducer from "./judgeReducer";
import notificationReducer from "./notificationReducer";
export default combineReducers({
    user: userReducer,
    productline: productlineReducer,
    product: productReducer,
    user: userReducer,
    error: errorReducer,
    order: orderReducer,
    orderCart: orderCartReducer,
    voucher: voucherReducer,
    judge: judgeReducer,
    notification: notificationReducer,
});
