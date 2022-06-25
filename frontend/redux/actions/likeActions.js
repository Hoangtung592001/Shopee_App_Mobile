import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";


export const getLikedProducts = (accessToken) => (dispatch) => {
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


