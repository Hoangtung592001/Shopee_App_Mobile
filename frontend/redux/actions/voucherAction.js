import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getAllVouchers = (accessToken) => async (dispatch) => {
  await axios({
    url: SERVICE_URL.API_SERVER + "voucher/get-all-vouchers",
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => {
      dispatch({
        type: GLOBAL_TYPES.GET_VOUCHERS,
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
