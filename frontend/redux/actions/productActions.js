import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getProducts = (type) => async (dispatch) => {
    const response = await axios({
        url:
            SERVICE_URL.API_SERVER +
            SERVICE_URL.PRODUCT_PREFIX +
            SERVICE_URL.PRODUCT_SERVICES.GET_ALL_PRODUCTS.URL +
            `?type=${type}`,
        method: SERVICE_URL.PRODUCT_SERVICES.GET_ALL_PRODUCTS.METHOD,
    });

    dispatch({
        type: GLOBAL_TYPES.GET_PRODUCTS,
        payload: response.data.data,
    });
};

export const getProductById = (id) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/get-product/" + id,
        method: "GET",
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_PRODUCT_BY_ID,
                payload: response.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GLOBAL_TYPES.ERROR,
                payload: JSON.parse(err.response.request._response),
            });
        });
};
export const getProductByUser = (accessToken, id) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/get-product-by-user/" + id,
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_PRODUCT_BY_ID,
                payload: response.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GLOBAL_TYPES.ERROR,
                payload: JSON.parse(err.response.request._response),
            });
        });
};

export const addProduct = (accessToken, props) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/add-products",
        method: "POST",
        data: props,
        headers: {
            Authorization: "Bearer " + accessToken,
        },
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

export const visitProduct = (id, accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/recent-visited/" + id,
        method: "POST",
        headers: {
            Authorization: "Bearer " + accessToken,
        },
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
export const getRecentVisitedProduct = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/get-recent-visited",
        method: "GET",
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_RECENT_VISITED_PRODUCTS,
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

export const getLikedProducts = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/get-liked-products",
        method: "GET",
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_LIKED_PRODUCTS,
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

export const getInfoOrder = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "product/get-info-order",
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            console.log(response.data.data);
            dispatch({
                type: GLOBAL_TYPES.GET_INFO_ORDER,
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

export const getProgressOrder =
    (
        deletedOrders,
        deliveringOrders,
        waitingForDeliveringProducts,
        deliveredProducts
    ) =>
    async (dispatch) => {
        dispatch({
            type: GLOBAL_TYPES.GET_PROGRESS_ORDERS,
            payload: {
                deletedOrders: deletedOrders,
                deliveringOrders: deliveringOrders,
                waitingForDeliveringProducts: waitingForDeliveringProducts,
                deliveredProducts: deliveredProducts,
            },
        });
    };

export const getListSearchProducts = (keywords) => async (dispatch) => {
    await axios({
        url:
            SERVICE_URL.API_SERVER +
            "product/list-search-products?keywords=" +
            keywords,
        method: "GET",
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_LIST_SEARCH_PRODUCTS,
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

export const getSearchProducts = (keywords) => async (dispatch) => {
    await axios({
        url:
            SERVICE_URL.API_SERVER +
            "product/search-products?keywords=" +
            keywords,
        method: "GET",
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_SEARCH_PRODUCTS,
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

export const changeInfoProduct =
    (accessToken, params, productId) => async (dispatch) => {
        await axios({
            url:
                SERVICE_URL.API_SERVER +
                `product/change-product-info/${productId}`,
            method: "PATCH",
            data: params,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
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

export const likeOrDislikeProduct =
    (accessToken, productId, type) => async (dispatch) => {
        await axios({
            url: SERVICE_URL.API_SERVER + `like/like-product/${productId}`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
                dispatch({
                    type: GLOBAL_TYPES.LIKE_PRODUCT,
                    payload: type,
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

const handleUpload = async (accessToken, payload) => {
    try {
        let formData = new FormData();
        formData.append("file", payload);
        setLoading(true);
        const res = await axios.post(
            SERVICE_URL.API_SERVER + "product/upload-image-product",
            formData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        dispatch({
            type: GLOBAL_TYPES.ERROR,
            payload: JSON.parse(err.response.request._response),
        });
    }
};
