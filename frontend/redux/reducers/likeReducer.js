import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  numberOfLikes: {
    data: 0,
  },
};

export default function judgeReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.GET_JUDGES:
      return {
        ...state,
        judges: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
