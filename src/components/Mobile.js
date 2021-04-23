import React from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import circles from "../images/bg-pattern-circles.svg";
import phones from "../images/illustration-phones.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "rgb(48,49,69)",
    background:
      "linear-gradient(90deg, rgba(48,49,69,1) 0%, rgba(61,64,97,1) 100%)",

    zIndex: 1,
    position: "relative",
    overflow: "hidden",
    borderRadius: "0 100px 0 100px",
    margin: theme.spacing(10, 0),

    [theme.breakpoints.up("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "30vh",
      height: "75vh",
    },
  },
  circles: {
    position: "absolute",
    zIndex: -1,
    [theme.breakpoints.up("md")]: {
      marginTop: "-60vh",
      marginLeft: "-10vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "140%",
      marginTop: "-20vh",
      marginLeft: "-20vw",
    },
  },
  subHeading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    fontSize: "32px",
    color: "white",
    padding: theme.spacing(12, 14, 4, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(20, 4, 2, 4),
      textAlign: "center",
    },
  },
  captions: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "300",
    color: "white",
    padding: theme.spacing(0, 14, 4, 0),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: theme.spacing(2, 4, 2, 4),
    },
  },
  phones: {
    padding: theme.spacing(0, 0, 0, 14),
    position: "absolute",
    zIndex: 999,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(2),
      marginTop: theme.spacing(6),
    },
  },
}));

const Mobile = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div classname={classes.phonesWrapper}>
        <img src={phones} className={classes.phones} />
      </div>
      <Container maxWidth={false} className={classes.container}>
        <img src={circles} className={classes.circles} />

        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={6}>
            {/* <img src={phones} className={classes.phones} /> */}.
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.subHeading}>
              State of the art infrastructure
            </Typography>
            <Typography variant="body1" className={classes.captions}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Mobile;
