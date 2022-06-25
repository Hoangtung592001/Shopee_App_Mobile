import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getOrders = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "order",
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_ORDERS,
                payload: response.data.data,
            });
            dispatch({
                type: GLOBAL_TYPES.DELETE_ERROR,
            });
        })
        .catch((err) => {
            dispatch({
                type: GLOBAL_TYPES.ERROR,
                payload: JSON.parse(err.response.request._response),
            });
        });
};

export const orderProducts = (accessToken, params) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "order",
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: params,
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_ALL_PRODUCTS_IN_CART,
                payload: [],
            });
            dispatch({
                type: GLOBAL_TYPES.DELETE_ERROR,
            });
        })
        .catch((err) => {
            dispatch({
                type: GLOBAL_TYPES.ERROR,
                payload: JSON.parse(err.response.request._response),
            });
        });
};

export const calcelOrder = (accessToken, orderId) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "order/delete-order-user",
        method: "PUT",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: {
            orderId: orderId,
            status: 0,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.DELETE_ORDER_BY_USER,
                payload: orderId,
            });
            dispatch({
                type: GLOBAL_TYPES.DELETE_ERROR,
            });
        })
        .catch((err) => {
            dispatch({
                type: GLOBAL_TYPES.ERROR,
                payload: JSON.parse(err.response.request._response),
            });
        });
};
