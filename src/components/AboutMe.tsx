import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import '../css/AboutMeTransitions.css'
import profile from '../images/profile.jpg';
import background from '../images/background.jpg';
import { topBarHeight } from '../constants/TopBarConstants';
import { AboutMeProps } from '../constants/PropsConstants';
import { isElementVisible } from '../constants/FunctionConstants';

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
      backgroundSize: 'cover'
    },
    headerText: {
      textAlign: 'center',
      color: 'white'
    },
    selfIntro: {
      marginTop: '0.5em'
    },
    selfEdu: {
      marginBottom: topBarHeight + 1
    }
  })
);

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const [avatarClass, setAvatarClass] = React.useState('avatar-entering');
  const [selfIntroClass, setSelfIntroClass] = React.useState('self-intro-entering');
  const [selfDescrClass, setSelfDescrClass] = React.useState('self-descr-entering');
  const [selfEduClass, setSelfEduClass] = React.useState('self-edu-entering');
  const classes = useStyles();
  const handleSectionAnimate = () => {
    let element = document.querySelector('#aboutme');
    if (element && isElementVisible(element)) {
      setAvatarClass('avatar-entered');
      setSelfIntroClass('self-intro-entered');
      setSelfDescrClass('self-descr-entered');
      setSelfEduClass('self-edu-entered');
    }
  }
  React.useEffect(() => {
    window.addEventListener('load', handleSectionAnimate);
    window.addEventListener('scroll', handleSectionAnimate);
    return () => {
      window.removeEventListener('load', handleSectionAnimate);
      window.removeEventListener('scroll', handleSectionAnimate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.grid}
      ref={props.aboutMeRef}
      id='aboutme'
    >
      <Avatar
        alt='Remy Sharp'
        src={profile}
        className={[classes.avatar, avatarClass].join(' ')}
        style={{ marginTop: topBarHeight + 1 }}
        ref={props.profileRef}
      />
      <Typography
        variant='h2'
        className={[classes.headerText, classes.selfIntro, selfIntroClass].join(' ')}
        gutterBottom
      >
        This is Paul
      </Typography>
      <Typography
        variant='h4'
        className={[classes.headerText, selfDescrClass].join(' ')}
        gutterBottom
      >
        I develop full-stack web and mobile applications.
      </Typography>
      <Typography
        variant='h6'
        className={[classes.headerText, classes.selfEdu, selfEduClass].join(' ')}
      >
        B.S. Computer Science, UC San Diego, Graduating June 2022
      </Typography>
    </Grid>
  );
}

export default AboutMe;