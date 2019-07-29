import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import '../css/AboutMeTransitions.css'
import profile from '../images/profile.jpg';
import background from '../images/background.jpg';
import { topBarHeight } from '../constants/TopBarConstants';
import { AboutMeProps } from '../constants/PropsConstants';

const useStyles = makeStyles(
  createStyles({
    avatar: {
      width: 250,
      height: 250
    },
    grid: {
      minHeight: window.innerHeight || document.documentElement.clientHeight,
      verticalAlign: 'middle',
      overflow: 'hidden',
      background: `url(${background}) no-repeat center center fixed`,
      backgroundSize: "cover",
    },
    headerText: {
      textAlign: 'center',
      color: 'white'
    }
  })
);

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
          style={{marginTop: topBarHeight + 1}}
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
        style={{marginTop: '0.5em'}}
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
          variant="h4"
          className={classes.headerText}
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
          style={{marginBottom: topBarHeight + 1}}
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
      ref={props.aboutMeRef}
    >
      { transitionComponents.map((component, key) => 
        <CSSTransition
          in={component.in}
          appear={component.appear}
          timeout={component.timeout}
          classNames={component.classNames}
          key={key}
        >
          {component.element}
        </CSSTransition>
      )}
    </Grid>
  );
}

export default AboutMe;