import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const deleteError = () => async (dispatch) => {
  dispatch({
    type: GLOBAL_TYPES.DELETE_ERROR,
  });
};
