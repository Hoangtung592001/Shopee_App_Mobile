import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  success: true,
  errorCode: "",
  message: "",
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case GLOBAL_TYPES.DELETE_ERROR:
      return {
        success: true,
        errorCode: "",
        message: "",
      };
    default:
      return state;
  }
}
