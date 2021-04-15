import React, { useState } from "react";

import "./Display.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    flexGrow: 1,
  },
  pos: {
    marginBottom: 12,
  },
});

const handleClick = (input) => {
    const username = input.input

    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

const Display = ({ input }) => {
  const classes = useStyles();

  return (
    <div className="display-container">

      <div className="searchbtn">
        <Button
          size="large"
          className="btn-search"
          variant="outlined"
          color="primary"
          onClick={() => handleClick({input})}
        >
          Search
        </Button>
      </div>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Profile Details
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Display;
