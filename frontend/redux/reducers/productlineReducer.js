import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  data: [],
};

export default function productlineReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.GET_PRODUCT_LINE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
