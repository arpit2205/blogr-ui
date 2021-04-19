import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import design from "../images/bg-pattern-intro.svg";
import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("md")]: {
      height: "70vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "60vh",
    },

    zIndex: 1,
    position: "relative",
    margin: 0,
    padding: 0,
    background: "rgb(255, 133, 110)",
    background:
      "linear-gradient(90deg, rgba(255,133,110,1) 0%, rgba(255,68,87,1) 100%)",
    overflow: "hidden",
    borderRadius: "0 0 0 80px",
  },
  svg: {
    zIndex: -1,
    width: "150%",
    position: "absolute",
    top: 0,
    marginTop: "-120vh",
    marginRight: "-40vw",
    "@media(max-width: 600px)": {
      width: "360%",
      position: "absolute",
      top: 0,
      marginTop: "-40vh",
      left: "-90vw",
    },
  },
  heading: {
    color: "white",
    "@media(max-width: 600px)": {
      fontSize: "36px",
      margin: theme.spacing(1, 3),
      marginTop: theme.spacing(6),
    },
  },
  subtitle: {
    color: "white",
    fontWeight: "100",
    fontSize: "10px",
    "@media(max-width: 600px)": {
      fontSize: "18px",
      margin: theme.spacing(1, 3),
    },
  },
  btnFilled: {
    borderRadius: "16px",
    border: "none",
    background: "white",
    padding: theme.spacing(1.1, 1.5),
    color: "#FF4658",
    fontSize: "12px",
    "@media(max-width: 600px)": {
      fontSize: "20px",
    },
  },
  btnEmpty: {
    borderRadius: "16px",
    border: "1px solid white",
    background: "transparent",
    padding: theme.spacing(1, 1.5),
    color: "white",
    fontSize: "12px",
    "@media(max-width: 600px)": {
      fontSize: "20px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <img className={classes.svg} src={design} />

        <Typography
          variant="h4"
          align="center"
          className={classes.heading}
          style={{ padding: "120px 4px 4px 4px" }}
        >
          A modern publishing platform
        </Typography>
        <Typography
          variant="body2"
          align="center"
          className={classes.subtitle}
          style={{ paddingBottom: "32px" }}
        >
          Grow your audience and build your online brand
        </Typography>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid item>
            <button className={classes.btnFilled}>Start for free</button>
          </Grid>
          <Grid item>
            <button className={classes.btnEmpty}>Learn more</button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
