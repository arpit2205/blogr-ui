import React from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import desktopImage from "../images/illustration-editor-desktop.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    color: "#3C3F60",
    padding: theme.spacing(10, 2),
  },
  desktopImg: {
    padding: theme.spacing(1, 6),
    marginTop: "-10%",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 1),
    },
  },

  subHeading: {
    padding: theme.spacing(1, 10),
    fontWeight: "26px",
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
}));

const Editor = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Designed for the future
        </Typography>

        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={desktopImage}
              width="100%"
              className={classes.desktopImg}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.subHeading}>
              Introducing an extensible editor
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
              Robust content management
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

export default Editor;
