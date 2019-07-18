import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import profile from '../images/profile.jpg';
import background from '../images/background.jpg';

const useStyles = makeStyles(
  createStyles({
    avatar: {
      width: 200,
      height: 200
    },
    masthead: {
      height: '100vh',
      minHeight: '500px',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  })
);

const AboutMe: React.FC = () => {
  const classes = useStyles();
  return(
    <header className={classes.masthead}>
      <Avatar alt="Remy Sharp" src={profile} className={classes.avatar} />
    </header>
  );
}

export default AboutMe;