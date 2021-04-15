import React, { useState } from "react";

import "./Display.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

const Display = ({ input }) => {
  const classes = useStyles();
  const [userdata, setUserdata] = useState({});
  const [checkdata, setCheckdata] = useState(false);

  const handleClick = (input) => {
    const username = input.input;

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUserdata(data);
        setCheckdata(true);
        if(data.message){
          setCheckdata(false);
        }
      });
  };

  return (
    <div className="display-container">
      <div className="searchbtn">
        <Button
          size="large"
          className="btn-search"
          variant="outlined"
          color="primary"
          onClick={() => handleClick({ input })}
        >
          Search
        </Button>
      </div>

      <div>

        {(() => {
          if (checkdata) {
            return (
              <Card className={classes.root} variant="outlined">
                <CardContent className="userdata">
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography variant="h6" className={classes.title}>
                      Profile Details
                    </Typography>
                    <Avatar
                      src={userdata.avatar_url}
                      className={classes.large}
                    />
                    <u>
                      <p className="username">{userdata.login}</p>
                    </u>
                    <p>{userdata.bio}</p>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                  >
                    <b>
                      <p>
                        {userdata.followers}
                        <br />
                        <br />
                        Followers
                      </p>
                    </b>
                    <b>
                      <p>
                        {userdata.following}
                        <br />
                        <br />
                        Following
                      </p>
                    </b>
                  </Grid>
                </CardContent>
              </Card>
            );
          }else if(!checkdata && userdata.message){
            return (
              
              <p className="username">Error Message: {userdata.message}</p>
            )
            
          } 
        })()}
      </div>
    </div>
  );
};

export default Display;
