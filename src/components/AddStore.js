import React from "react";
import { addStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Add } from "react-router-dom";
import './Style.css';
const useStyles = addStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function AddButton() {
  const rootClass = useStyles();
  return (
    <Add
      to="/AddNewStore"
      className="add_button"
      style={{ textDecoration: "none" }}
    >
      <div className={rootClass.root}>
        <Button variant="contained" color="primary" id="add_btn">
          Add New Store
        </Button>
      </div>
    </Add>
  );
}
