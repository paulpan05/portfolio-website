import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import profile from '../images/profile.jpg';
import '../css/AboutMe.css'

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
};

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const classes = useStyles();
  const transitionComponents = [
    {
      in: true, 
      appear: true, 
      timeout: 1000, 
      classNames: "avatar",
      element: 
        <Avatar
          alt="Remy Sharp" 
          src={profile}
          className={classes.avatar}
          ref={props.profileRef}
        />
    },
    {
      in: true, 
      appear: true, 
      timeout: 1500, 
      classNames: "self-intro",
      element:
      <Typography
        variant="h2"
        className={classes.headerText}
        gutterBottom
      >
        This is Paul
      </Typography> 
    },
    {
      in: true, 
      appear: true, 
      timeout: 2000, 
      classNames: "self-descr",
      element:
        <Typography
          className={classes.introText}
          gutterBottom
        >
          I develop full-stack web and mobile applications.
        </Typography>
    },
    {
      in: true, 
      appear: true, 
      timeout: 2500, 
      classNames: "self-edu",
      element:
        <Typography
          variant="h6"
          className={classes.headerText}
          gutterBottom
        >
          B.S. Computer Science, UC San Diego, Graduating June 2022
        </Typography>
    }
  ];
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      { transitionComponents.map((component) => 
        <CSSTransition
          in={component.in}
          appear={component.appear}
          timeout={component.timeout}
          classNames={component.classNames}
        >
          {component.element}
        </CSSTransition>
      )}
    </Grid>
  );
}

export default AboutMe;