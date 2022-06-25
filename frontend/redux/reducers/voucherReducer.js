import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  voucher: {
    data: [],
  },
};

export default function voucherReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.GET_VOUCHERS:
      return {
        ...state,
        voucher: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
