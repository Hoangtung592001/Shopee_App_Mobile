import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
    judges: {
        data: [],
    },
    myJudges: [],
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

        case GLOBAL_TYPES.GET_MY_JUDGES:
            return {
                ...state,
                myJudges: action.payload,
            };
        default:
            return state;
    }
}
