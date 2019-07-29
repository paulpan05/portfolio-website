import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import background from './images/background.jpg';
import TopBar from './components/TopBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import { watchForHover } from './constants/FunctionConstants';

const useStyles = makeStyles(
  createStyles({
    mainPage: {
      background: `url(${background}) no-repeat center center fixed`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      backgroundSize: "cover",
      OBackgroundSize: "cover"
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const aboutMeRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const educationRef = React.useRef(null);
  const profileRef = React.useRef(null);
  const contactMeRef = React.useRef(null);
  watchForHover()
  return (
    <div className={classes.mainPage}>
      <TopBar
        aboutMe={aboutMeRef}
        experience={experienceRef}
        projects={projectsRef}
        education={educationRef}
        profile={profileRef}
        contactMe={contactMeRef}
      />
      <AboutMe
        profileRef={profileRef}
        aboutMeRef={aboutMeRef}
      />
      <Experience
        experienceRef={experienceRef}
      />
      <Projects
        projectsRef={projectsRef}
      />
      <Education
        educationRef={educationRef}
      />
      <ContactMe
        contactMeRef={contactMeRef}
      />
    </div>
  );
}

export default App;
