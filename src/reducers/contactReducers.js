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

export function contactListReducer(state = { contacts: [] }, action) {
  switch (action.type) {
    case CONTACT_LIST_REQUEST:
      return { loading: true };
    case CONTACT_LIST_SUCCESS:
      return { loading: false, contacts: action.payload };
    case CONTACT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function contactDetailsReducer(state = { contact: {} }, action) {
  switch (action.type) {
    case CONTACT_DETAILS_REQUEST:
      return { loading: true };
    case CONTACT_DETAILS_SUCCESS:
      return { loading: false, contact: action.payload };
    case CONTACT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
