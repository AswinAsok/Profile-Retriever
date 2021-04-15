import React from "react";
import "./Display.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

const Display = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="display-container">
      <Card className={classes.root} variant="outlined">
        <CardContent>
        <Typography variant="h5" className={classes.title}>
            Profile Details
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Display;
