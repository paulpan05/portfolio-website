import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import profile from '../images/profile.jpg'

const useStyles = makeStyles(
  createStyles({
    avatar: {
      margin: 10,
      width: 200,
      height: 200
    }
  })
);

const AboutMe: React.FC = () => {
  const classes = useStyles();
  return(<Avatar alt="Remy Sharp" src={profile} className={classes.avatar} />);
}

export default AboutMe;