import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneContact } from "../../../actions";

export const SingleContact = (props) => {
  const id = props.match.params.id;
  const { contact, loading, error } = useSelector(
    (state) => state.loadOneContact
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneContact(id));
  }, [dispatch, id]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <span>{contact.firstName}</span>
  );
};
