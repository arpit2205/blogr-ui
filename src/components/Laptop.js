import React from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import laptop from "../images/illustration-laptop-desktop.svg";

const useStyles = makeStyles((theme) => ({
  laptop: {
    width: "140%",
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginLeft: "-20vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
  },
  container: {},
  subHeading: {
    padding: theme.spacing(1, 10),
    fontSize: "26px",
    fontWeight: "400",
    fontFamily: "Montserrat, sans-serif",
    color: "#3C3F60",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 3),
      textAlign: "center",
    },
  },
  captions: {
    padding: theme.spacing(1, 10),
    fontWeight: "300",
    fontFamily: "Montserrat, sans-serif",
    color: "#3C3F60",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 3),
      textAlign: "center",
    },
  },
  textWrapper: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(16),
    },
  },
}));

const Laptop = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidht={false} className={classes.container}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={laptop} className={classes.laptop} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.textWrapper}>
            <Typography variant="h5" className={classes.subHeading}>
              Free, open and simple
            </Typography>
            <Typography variant="body1" className={classes.captions}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </Typography>

            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ marginTop: "32px" }}
            >
              Powerful tooling
            </Typography>
            <Typography variant="body1" className={classes.captions}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Laptop;
