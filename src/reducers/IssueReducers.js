import {
  TICKET_ACTION_REQUEST,
  TICKET_ACTION_SUCCESS,
  TICKET_ACTION_FAIL,
  TICKET_ACTION_RESET,
} from "../constants/issueContants";
import { TICKET_LISTS_FAIL } from "../constants/ticketContants";

export const createActionReducer = (state = {}, action) => {
  switch (action.type) {
    case TICKET_ACTION_REQUEST:
      return { loading: true };
    case TICKET_ACTION_SUCCESS:
      return { loading: false, success: true, actionDetails: action.payload };
    case TICKET_LISTS_FAIL:
      return { loading: false, error: action.payload };
    case TICKET_ACTION_RESET:
      return {};
    default:
      return state;
  }
};
