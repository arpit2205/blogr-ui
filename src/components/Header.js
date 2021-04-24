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
import Fade from "react-reveal/Fade";

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
    borderRadius: "0 0 0 100px",
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
    fontSize: "56px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    "@media(max-width: 600px)": {
      fontSize: "32px",
      margin: theme.spacing(1, 2),
      marginTop: theme.spacing(6),
    },
  },
  subtitle: {
    color: "white",
    fontWeight: "100",
    fontSize: "24px",
    fontFamily: "Montserrat, sans-serif",
    marginTop: theme.spacing(1),
    "@media(max-width: 600px)": {
      fontSize: "18px",
      margin: theme.spacing(2, 3),
    },
  },
  btnFilled: {
    fontFamily: "Montserrat, sans-serif",
    borderRadius: "16px",
    border: "none",
    background: "white",
    padding: theme.spacing(1.1, 2),
    color: "#FF4658",
    fontSize: "24px",
    fontWeight: "500",
    transition: "0.2s all",
    "@media(max-width: 600px)": {
      fontSize: "20px",
    },
    "&:hover": {
      opacity: "0.7",
    },
  },
  btnEmpty: {
    fontFamily: "Montserrat, sans-serif",
    borderRadius: "16px",
    border: "1px solid white",
    background: "transparent",
    padding: theme.spacing(1, 2),
    color: "white",
    fontWeight: "500",
    fontSize: "24px",
    transition: "0.2s all",
    "@media(max-width: 600px)": {
      fontSize: "20px",
    },
    "&:hover": {
      opacity: "0.7",
    },
  },
  logo: {
    padding: theme.spacing(6),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <img src={logo} className={classes.logo} />

        <img className={classes.svg} src={design} />
        <Fade>
          <Typography
            variant="h4"
            align="center"
            className={classes.heading}
            style={{ padding: "0 4px 4px 4px" }}
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
        </Fade>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid item>
            <Fade bottom>
              <button className={classes.btnFilled}>Start for free</button>
            </Fade>
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
