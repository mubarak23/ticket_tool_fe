import axios from "axios";
import {
  TICKET_ACTION_REQUEST,
  TICKET_ACTION_SUCCESS,
  TICKET_ACTION_FAIL,
  ACTION_TICKET_LIST_REQUEST,
  ACTION_TICKET_LIST_SUCCESS,
  ACTION_TICKET_LIST_FAIL,
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

export const actionticketlist = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACTION_TICKET_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/ticket/user_action_tickets/${id}`);
    dispatch({
      type: ACTION_TICKET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTION_TICKET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};
