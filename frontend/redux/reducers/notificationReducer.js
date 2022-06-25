import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
    notifications: [],
};

export default function judgeReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_TYPES.GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
            };
        default:
            return state;
    }
}
