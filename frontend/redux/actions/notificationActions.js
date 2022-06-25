import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getNotifications = (accessToken) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "notifications/get-notifications",
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => {
            dispatch({
                type: GLOBAL_TYPES.GET_NOTIFICATIONS,
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

export const sendNotification = (accessToken, props) => async (dispatch) => {
    await axios({
        url: SERVICE_URL.API_SERVER + "notifications/send-notification",
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: props,
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
