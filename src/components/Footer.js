import React from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#24242C",
    borderRadius: "0 100px 0 0",
    color: "white",
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    padding: theme.spacing(4, 2, 1, 2),
  },
  links: {
    padding: theme.spacing(1, 2),
  },
  logo: {
    padding: theme.spacing(4, 2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={3}>
            <img className={classes.logo} src={logo} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className={classes.title}>
              Product
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Overview
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Pricing
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Marketplace
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Features
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Integrations
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className={classes.title}>
              Company
            </Typography>
            <Typography variant="body1" className={classes.links}>
              About
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Team
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Blog
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Career
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className={classes.title}>
              Connect
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Contact
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Newsletter
            </Typography>
            <Typography variant="body1" className={classes.links}>
              Linkedin
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
