import axios from "axios";
import {
  TICKET_LISTS_REQUEST,
  TICKET_LISTS_SUCCESS,
  TICKET_LISTS_FAIL,
  SINGLE_TICKET_REQUEST,
  SINGLE_TICKET_SUCCESS,
  SINGLE_TICKET_FAIL,
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
      payload: data,
      //JSON.stringify(data),
    });
  } catch (error) {
    dispatch({
      type: TICKET_LISTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};

export const singleticket = (case_id) => async (dispatch, getState) => {
  console.log(case_id);
  try {
    dispatch({ type: SINGLE_TICKET_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `/api/ticket/ticket_details/${userInfo.user_id}/${case_id}`,
      config
    );
    dispatch({
      type: SINGLE_TICKET_SUCCESS,
      payload: data,
      //JSON.stringify(data),
    });
    console.log(data);
    //console.log(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
