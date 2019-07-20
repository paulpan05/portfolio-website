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
      margin: 30
    },
    grid: {
      height: '100vh',
      minHeight: '500px',
      verticalAlign: 'middle'
    },
    headerText: {
      color: 'white'
    }
  })
);

type AboutMeProps = {
  profileRef: React.RefObject<HTMLDivElement>
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
      <Typography variant="h2" className={classes.headerText} gutterBottom>
        This is Paul
      </Typography>
      <Typography variant="h4" className={classes.headerText} gutterBottom>
        I develop full-stack web and mobile applications.
      </Typography>
      <Typography variant="h6" className={classes.headerText} gutterBottom>
        B.S. Computer Science, UC San Diego, Graduating June 2022
      </Typography>
    </Grid>
  );
}

export default AboutMe;