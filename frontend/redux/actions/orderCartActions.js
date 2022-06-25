import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getAllProductsInCart = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "order-cart/get-all-products-in-cart",
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            const products = response.data.data.filter((product) => {
                return product.orderCart.quantityOrder != 0;
            });
            dispatch({
                type: GLOBAL_TYPES.GET_ALL_PRODUCTS_IN_CART,
                payload: products,
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

export const changeQuantityProductInCart =
    (accessToken, products, props) => async (dispatch) => {
        await axios({
            url: SERVICE_URL.API_SERVER + "order-cart/change-quantity-products",
            method: "PUT",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
            data: props,
        })
            .then((response) => {
                let newProducts;
                if (props.quantity == 0) {
                    newProducts = products.filter((product) => {
                        return product.id != props.productCode;
                    });
                } else {
                    newProducts = products.map((product) => {
                        if (product.id == props.productCode) {
                            product.orderCart.quantityOrder = props.quantity;
                        }
                        return product;
                    });
                }
                dispatch({
                    type: GLOBAL_TYPES.GET_ALL_PRODUCTS_IN_CART,
                    payload: newProducts,
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

export const deleteFromCart = (accessToken, productId) => async (dispatch) => {
    await axios({
        url:
            SERVICE_URL.API_SERVER + "order-cart/delete-from-cart/" + productId,
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    })
        .then((response) => {
            const newProducts = products.map((product) => {
                if (product.id == props.productCode) {
                    product.orderCart.quantityOrder = props.quantity;
                }
                return product;
            });
            dispatch({
                type: GLOBAL_TYPES.GET_ALL_PRODUCTS_IN_CART,
                payload: newProducts,
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

export const addProductToCart = (accessToken, props) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "order-cart/add-products-to-cart",
        method: "POST",
        headers: {
            Authorization: "Bearer " + accessToken,
        },
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
