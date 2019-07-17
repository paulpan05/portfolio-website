import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import page from '../constants/page'

const scrollToComponent = (ref: React.RefObject<any>) => {
  window.scrollTo(0, ref.current.offsetTop);
}

type TopBarProps = {
  aboutMe: React.RefObject<any>
  experience: React.RefObject<any>
  projects: React.RefObject<any>
  coursework: React.RefObject<any>
}

const TopBar: React.FC<TopBarProps> = (props: React.PropsWithChildren<TopBarProps>) => {
  const tabChange = (_event: React.ChangeEvent<{}>, value: number): void => {
    switch (value) {
      case page.AboutMe:
        scrollToComponent(props.aboutMe);
        break;
      case page.Experience:
        scrollToComponent(props.experience);
        break;
      case page.Projects:
        scrollToComponent(props.projects);
        break;
      case page.Coursework:
        scrollToComponent(props.coursework);
        break;
      default:
    }
  }
  const smallScreen: boolean = useMediaQuery('(min-width: 600px)');
  return (
    <AppBar>
      <Tabs
        value={false}
        onChange={tabChange}
        centered={smallScreen}
        variant={smallScreen ? undefined : "scrollable"}
        scrollButtons={smallScreen ? undefined : "on"}
      >
        <Tab label="About me" />
        <Tab label="Experience" />
        <Tab label="Projects" />
        <Tab label="Coursework" />
        <Tab label="Resume" />
      </Tabs>
    </AppBar>
  );
}

export default TopBar;