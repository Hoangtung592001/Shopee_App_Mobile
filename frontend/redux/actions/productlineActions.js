import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getProductLines = () => async (dispatch) => {
  const response = await axios({
    url:
      SERVICE_URL.API_SERVER +
      SERVICE_URL.PRODUCTLINE_PREFIX +
      SERVICE_URL.PRODUCT_LINE_SERVICES.GET_ALL_PRODUCT_LINES.URL,
    method: SERVICE_URL.PRODUCT_LINE_SERVICES.GET_ALL_PRODUCT_LINES.METHOD,
  });

  const data = response.data.data.map((productline, index) => {
    return {
      ...productline,
      active: index == 0 ? true : false,
    };
  });

  dispatch({
    type: GLOBAL_TYPES.GET_PRODUCT_LINE,
    payload: data,
  });
};

export const setActiveForProductLines = (productLines, index) => (dispatch) => {
  const results = productLines.map((item) => {
    if (item.id == index + 1) {
      return { ...item, active: true };
    }
    return { ...item, active: false };
  });
  dispatch({
    type: GLOBAL_TYPES.GET_PRODUCT_LINE,
    payload: results,
  });
};
