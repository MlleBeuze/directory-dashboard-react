import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
} from "../constants/contacts";

// Reducer is a function that accepts a state and an action,
// and returns an updated state based on the action

export function loadContactsReducer(state = { contacts: [] }, action) {
  switch (action.type) {
    case CONTACT_LIST_REQUEST:
      return { ...state, loading: true };
    case CONTACT_LIST_SUCCESS:
      return { ...state, loading: false, contacts: action.payload.data };
    case CONTACT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: "Error while fetching contacts",
      };
    default:
      return state;
  }
}

export function loadOneContactReducer(state = { contact: {} }, action) {
  switch (action.type) {
    case CONTACT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CONTACT_DETAILS_SUCCESS:
      return { ...state, loading: false, contact: action.payload.data };
    case CONTACT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error.response.data.message || action.message,
      };
    default:
      return state;
  }
}
