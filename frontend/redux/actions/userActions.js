import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";
export const login = (props) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "client-auth/signin",
        method: "POST",
        data: props,
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.SIGN_IN,
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

export const register = (props) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "client-auth/signup",
        method: "POST",
        data: props,
    })
        .then((response) => {
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

export const refreshToken = (props) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "client-auth/refresh-access-token",
        method: "POST",
        data: props,
    })
        .then((data) => {
            dispatch({
                type: GLOBAL_TYPES.REFRESH_TOKEN,
                payload: data.data.data,
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

export const getPersonalInfo = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "member/get-personal-info",
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_PERSONAL_INFO,
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

export const getPersonalInfoPublic = (memberId) => async (dispatch) => {
    await axios({
        url:
            SERVICE_URL.API_SERVER +
            "member/get-all-products-in-shop-public/" +
            memberId,
        method: "GET",
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_PERSONAL_INFO_SHOP_PUBLIC,
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

export const editPhone = (accessToken, phone) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "member/edit-phone",
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: {
            phone,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.EDIT_PHONE,
                payload: phone,
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

export const registerShop = (accessToken, info) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "member/register-shop",
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: info,
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.REGISTER_SHOP,
                payload: info,
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

export const getAllProductsInShop = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/get-all-products-in-shop",
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_PRODUCTS_IN_SHOP,
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

export const deleteProduct = (id, accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/user-delete-product/" + id,
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.DELETE_PRODUCT,
                payload: id,
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

export const getUserOrders = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "order/order-in-shop",
        method: "GET",
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_USER_ORDERS,
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

export const updateOrderStatusByOwner =
    (accessToken, props) => async (dispatch) => {
        await axios({
            url: SERVICE_URL.API_SERVER + "order/update-order-status-owner",
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            data: props,
        })
            .then((response) => {
                dispatch({
                    type: GLOBAL_TYPES.UPDATE_ORDER_STATUS_BY_OWNER,
                    payload: props,
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

export const logOut = () => (dispatch) => {
    dispatch({
        type: GLOBAL_TYPES.LOG_OUT,
    });
};
