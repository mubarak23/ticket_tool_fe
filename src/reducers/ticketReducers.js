import {
  TICKET_LISTS_REQUEST,
  TICKET_LISTS_SUCCESS,
  TICKET_LISTS_FAIL,
  TICKET_LISTS_RESET,
  SINGLE_TICKET_REQUEST,
  SINGLE_TICKET_SUCCESS,
  SINGLE_TICKET_FAIL,
  UPDATE_TICKET_STATUS_REQUEST,
  UPDATE_TICKET_STATUS_SUCCESS,
  UPDATE_TICKET_STATUS_FAIL,
  UPDATE_TICKET_STATUS_RESET,
} from "../constants/ticketContants.js";

export const myticketlistReducer = (state = {}, action) => {
  switch (action.type) {
    case TICKET_LISTS_REQUEST:
      return { loading: true };
    case TICKET_LISTS_SUCCESS:
      return { loading: false, tickets: action.payload };
    case TICKET_LISTS_FAIL:
      return { loading: false, error: action.payload };
    case TICKET_LISTS_RESET:
      return {};
    default:
      return state;
  }
};

export const singleTicketReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_TICKET_REQUEST:
      return { loading: true };
    case SINGLE_TICKET_SUCCESS:
      return { loading: false, singleTicket: action.payload };
    case SINGLE_TICKET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateTicketStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TICKET_STATUS_REQUEST:
      return { loading: true };
    case UPDATE_TICKET_STATUS_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_TICKET_STATUS_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_TICKET_STATUS_RESET:
      return {};
    default:
      return state;
  }
};
