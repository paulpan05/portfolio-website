import React from 'react';
import TopBar from './components/TopBar'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Coursework from './components/Coursework'

const App: React.FC = () => {
  const aboutMeRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const courseworkRef = React.useRef(null);
  return (
    <React.Fragment>
      <TopBar
        aboutMe={aboutMeRef} experience={experienceRef}
        projects={projectsRef} coursework={courseworkRef}
      />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={courseworkRef}>
        <Coursework />
      </div>
    </React.Fragment>
  );
}

export default App;
