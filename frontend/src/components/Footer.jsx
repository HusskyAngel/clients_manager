import React, { useState } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
}));
export default function Footer(){
  const [year, setYear] = useState(new Date().getFullYear());
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <Paper elevation={16}  >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6">Copyright &copy; {year}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            Made with ❤️ in React
          </Typography>
        </Grid>
      </Grid>
    </Paper>
    </footer>
  );
};

