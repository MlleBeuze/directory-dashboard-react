import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
} from "../constants/contacts";

export function getContacts() {
  return {
    types: [CONTACT_LIST_REQUEST, CONTACT_LIST_SUCCESS, CONTACT_LIST_FAIL],
    payload: {
      request: {
        url: "/contact",
      },
    },
  };
}

export function getOneContact(id) {
  return {
    types: [
      CONTACT_DETAILS_REQUEST,
      CONTACT_DETAILS_SUCCESS,
      CONTACT_DETAILS_FAIL,
    ],
    payload: {
      request: {
        url: `/contact/${id}`,
      },
    },
  };
}
