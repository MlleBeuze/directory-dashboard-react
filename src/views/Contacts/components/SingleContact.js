import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContact } from "../../../actions/contactActions";

export const SingleContact = (props) => {
  const id = props.match.params.id;
  const { contact, loading, error } = useSelector(
    (state) => state.contactDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact(id));
  }, [dispatch, id]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <span>{contact.firstName}</span>
  );
};
