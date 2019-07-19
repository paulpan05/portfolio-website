import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import profile from '../images/profile.jpg';

const useStyles = makeStyles(
  createStyles({
    avatar: {
      width: 250,
      height: 250,
      margin: 20
    },
    grid: {
      height: '200vh',
      minHeight: '500px',
      verticalAlign: 'middle'
    },
    headerText: {
      color: 'white'
    }
  })
);

type AboutMeProps = {
  profileRef: React.RefObject<any>
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Avatar alt="Remy Sharp" src={profile} className={classes.avatar} ref={props.profileRef} />
      <Typography variant="h2" className={classes.headerText}>
        This is Paul
        </Typography>
    </Grid>
  );
}

export default AboutMe;