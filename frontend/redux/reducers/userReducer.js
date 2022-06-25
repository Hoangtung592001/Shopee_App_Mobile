import GLOBAL_TYPES from "../../constants/actions";
import { refreshToken } from "../actions/userActions";

const initialState = {
    token: {
        accessToken: "",
        refreshToken: "",
    },
    info: {
        username: "",
        email: "",
        gender: "",
        dateOfBirth: "",
        phone: "",
        shop: {
            products: [],
        },
    },
    userOrders: [],
    infoPublic: {
        username: "",
        email: "",
        gender: "",
        dateOfBirth: "",
        phone: "",
        shop: {
            products: [],
        },
    },
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_TYPES.SIGN_IN:
            return {
                ...state,
                token: {
                    ...action.payload,
                },
            };
        case GLOBAL_TYPES.REFRESH_TOKEN:
            return {
                ...state,
                token: {
                    ...state.token,
                    accessToken: action.payload,
                },
            };
        case GLOBAL_TYPES.GET_PERSONAL_INFO:
            return {
                ...state,
                info: action.payload,
            };

        case GLOBAL_TYPES.GET_PERSONAL_INFO_SHOP_PUBLIC:
            return {
                ...state,
                infoPublic: action.payload,
            };

        case GLOBAL_TYPES.EDIT_PHONE:
            return {
                ...state,
                info: {
                    ...state.info,
                    phone: action.payload,
                },
            };
        case GLOBAL_TYPES.REGISTER_SHOP:
            return {
                ...state,
                info: {
                    ...state.info,
                    shop: action.payload,
                },
            };
        case GLOBAL_TYPES.GET_PRODUCTS_IN_SHOP:
            return {
                ...state,
                info: {
                    ...state.info,
                    shop: {
                        ...state.info.shop,
                        products: action.payload,
                    },
                },
            };
        case GLOBAL_TYPES.DELETE_PRODUCT:
            return {
                ...state,
                info: {
                    ...state.info,
                    shop: {
                        ...state.info.shop,
                        products: state.info.shop.products.filter((product) => {
                            return product.id != action.payload;
                        }),
                    },
                },
            };
        case GLOBAL_TYPES.GET_USER_ORDERS:
            return {
                ...state,
                userOrders: action.payload,
            };
        case GLOBAL_TYPES.UPDATE_ORDER_STATUS_BY_OWNER:
            return {
                ...state,
                userOrders: state.userOrders.map((order) => {
                    if (order.id == action.payload.orderId) {
                        order.status = action.payload.status;
                    }
                    return order;
                }),
            };
        case GLOBAL_TYPES.LOG_OUT:
            return {
                ...state,
                token: {
                    accessToken: "",
                    refreshToken: "",
                },
            };

        case GLOBAL_TYPES.CLEAR_USER_INFO:
            return {};
        default:
            return state;
    }
}
