import React from 'react';
import TopBar from './components/TopBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import { watchForHover } from './constants/FunctionConstants';

const App: React.FC = () => {
  const aboutMeRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const educationRef = React.useRef(null);
  const profileRef = React.useRef(null);
  const contactMeRef = React.useRef(null);
  const handlePageLoad = () => {
    document.getElementsByTagName('html')[0].style.visibility = 'visible'
  };
  React.useEffect(() => {
    window.addEventListener('load', handlePageLoad);
    return () => {
      window.removeEventListener('load', handlePageLoad);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  watchForHover()
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
