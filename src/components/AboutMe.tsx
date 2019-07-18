import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import profile from '../images/profile.jpg';
import background from '../images/background.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(
  createStyles({
    avatar: {
      width: 250,
      height: 250
    },
    masthead: {
      background: `url(${background}) no-repeat center center fixed`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      backgroundSize: "cover",
      OBackgroundSize: "cover"
    },
    grid: {
      height: '100vh',
      minHeight: '500px',
      verticalAlign: 'middle'
    }
  })
);

const AboutMe: React.FC = () => {
  const classes = useStyles();
  return(
    <header className={classes.masthead}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Avatar alt="Remy Sharp" src={profile} className={classes.avatar} />
      </Grid>
    </header>
  );
}

export default AboutMe;