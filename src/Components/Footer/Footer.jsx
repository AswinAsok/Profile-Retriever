import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import './Footer.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="Footer">
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h7" className={classes.title}>
            Made with Passion 💙 by Aswin Asok
            <a href = "https://github.com/AswinAsok/Profile-Retriever"> <br></br>Star 🌟 on GitHub</a>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
