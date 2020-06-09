import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
} from "../constants/contacts";
import axios from "axios";

export const listContacts = () => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:3000/api/contact");
    dispatch({ type: CONTACT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONTACT_LIST_FAIL, payload: error.message });
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_DETAILS_REQUEST, payload: id });
    const { data } = await axios.get(`http://localhost:3000/api/contact/${id}`);
    dispatch({ type: CONTACT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONTACT_DETAILS_FAIL, payload: error.response.data.message});
  }
};
