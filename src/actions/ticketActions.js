import axios from "axios";
import {
  TICKET_LISTS_REQUEST,
  TICKET_LISTS_SUCCESS,
  TICKET_LISTS_FAIL,
} from "../constants/ticketContants.js";

export const myticketlist = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: TICKET_LISTS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/ticket/user_ticket_lists/${id}`);
    dispatch({
      type: TICKET_LISTS_SUCCESS,
      payload: JSON.stringify(data),
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};
