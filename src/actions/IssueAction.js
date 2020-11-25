import axios from "axios";
import {
  TICKET_ACTION_REQUEST,
  TICKET_ACTION_SUCCESS,
  TICKET_ACTION_FAIL,
} from "../constants/issueContants";

export const createAction = (action) => async (dispatch, getState) => {
  try {
    dispatch({ type: TICKET_ACTION_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/ticket/create_action_ticket",
      action,
      config
    );
    dispatch({
      type: TICKET_ACTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TICKET_ACTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};
