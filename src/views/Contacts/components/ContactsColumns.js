import React from "react";
import { Typography, Avatar, Link } from "@material-ui/core";
import { getInitials } from "../../../helpers";
// import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import { CONTACT_MODEL_KEY } from "../../../constants/contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

export const columnHeaders = [
  "Name",
  "Email",
  "Phone number",
  // "Registration date",
];

const FirstColumnWithRouter = ({ model, history }) => {
  const classes = useStyles();
  const fullName = `${model.firstName} ${model.lastName}`;

  const navigateToModel = (model) => {
    history.push({
      pathname: `/${CONTACT_MODEL_KEY}/${model._id}`,
      state: { model}
    })
  }

  return (
    <div className={classes.nameContainer}>
      <Avatar className={classes.avatar} src={model.picture}>
        {getInitials(fullName)}
      </Avatar>
      <Typography variant="body1"><Link href="#"  onClick={() => navigateToModel(model)}>{fullName}</Link></Typography>
    </div>
  );
};

export const SecondColumn = ({ model }) => <span>{model.email}</span>;

export const ThirdColumn = ({ model }) => <span>{model.phoneNumbers[0]}</span>;


export const FirstColumn = withRouter(FirstColumnWithRouter);