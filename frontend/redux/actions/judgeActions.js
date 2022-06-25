import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const postJudge = (accessToken, params) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "judge/post-judge",
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: params,
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.DELETE_ERROR,
            });
        })
        .catch((err) => {
            dispatch({
                type: GLOBAL_TYPES.ERROR,
                payload: JSON.parse(err.response.request._response),
            });
        });
};

export const getJudgesOfProduct =
    (accessToken, productId) => async (dispatch) => {
        await axios({
            url: SERVICE_URL.API_SERVER + "judge/" + productId,
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
                dispatch({
                    type: GLOBAL_TYPES.GET_JUDGES,
                    payload: response.data.data,
                });
                dispatch({
                    type: GLOBAL_TYPES.DELETE_ERROR,
                });
            })
            .catch((err) => {
                dispatch({
                    type: GLOBAL_TYPES.ERROR,
                    payload: JSON.parse(err.response.request._response),
                });
            });
    };

export const getJudges = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "judge/get-judge",
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_MY_JUDGES,
                payload: response.data.data,
            });
            dispatch({
                type: GLOBAL_TYPES.DELETE_ERROR,
            });
        })
        .catch((err) => {
            dispatch({
                type: GLOBAL_TYPES.ERROR,
                payload: JSON.parse(err.response.request._response),
            });
        });
};
