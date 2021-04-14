import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./LandingPageStyle";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function LadingPage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Typography variant="h2" className={classes.title}>
        Let's Fly Away...
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button color="primary" variant="contained" className={classes.button}>
          <NavLink to="/explore" className={classes.navLink}>
            Discover more
          </NavLink>
        </Button>
      </Box>
    </Grid>
  );
}
