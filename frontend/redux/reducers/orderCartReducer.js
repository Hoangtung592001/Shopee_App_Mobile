import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  ordersCart: {
    data: [],
  },
};

export default function orderCartReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.GET_ALL_PRODUCTS_IN_CART:
      return {
        ...state,
        ordersCart: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
