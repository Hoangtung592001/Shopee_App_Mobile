import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  orders: {
    data: [],
  },
};

export default function productlineReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.GET_ORDERS:
      return {
        ...state,
        orders: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
