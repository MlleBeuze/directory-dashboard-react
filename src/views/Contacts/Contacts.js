import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import { CustomToolbar, CustomTable } from "../../components";
import {
  columnHeaders,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
} from "./components";

import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../actions/contactActions";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const Contacts = () => {
  const classes = useStyles();
  const { contacts, loading, error } = useSelector(
    (state) => state.loadContacts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className={classes.root}>
      <CustomToolbar />
      <div className={classes.content}>
        <CustomTable
          models={contacts}
          headers={columnHeaders}
          columns={[FirstColumn, SecondColumn, ThirdColumn]}
        />
      </div>
    </div>
  );
};

export default Contacts;
