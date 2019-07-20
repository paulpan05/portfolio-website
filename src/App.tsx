import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TopBar from './components/TopBar'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education';
import background from './images/background.jpg'

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
  return (
    <div className={classes.mainPage}>
      <TopBar
        aboutMe={aboutMeRef} experience={experienceRef}
        projects={projectsRef} education={educationRef}
        profile={profileRef}
      />
      <div ref={aboutMeRef}>
        <AboutMe profileRef={profileRef}/>
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
    </div>
  );
}

export default App;
