import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { page, topBarHeight } from '../constants/TopBarConstants'

const scrollToComponent = (ref: React.RefObject<any>) => {
  window.scrollTo(0, ref.current.offsetTop);
}

const scrolledUp = (ref: React.RefObject<any>): boolean => {
  return window.pageYOffset < ref.current.offsetTop - topBarHeight;
}

type TopBarProps = {
  aboutMe: React.RefObject<HTMLDivElement>
  experience: React.RefObject<HTMLDivElement>
  projects: React.RefObject<HTMLDivElement>
  education: React.RefObject<HTMLDivElement>
  profile: React.RefObject<HTMLDivElement>
}

const useStyles = makeStyles(
  createStyles({
    appBarTransparent: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      WebkitBoxShadow: 'none',
      MozBoxShadow: 'none'
    },
    tab: {
      height: topBarHeight
    },
    tabLabel: {
      fontSize: 'medium'
    }
  })
);

const TopBar: React.FC<TopBarProps> = (props) => {
  const classes = useStyles();
  const [barClass, setBarClass] = React.useState<string | undefined>(classes.appBarTransparent);
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
      case page.Education:
        scrollToComponent(props.education);
        break;
      default:
    }
  }
  window.onscroll = () => {
    scrolledUp(props.profile) ? setBarClass(classes.appBarTransparent) : setBarClass(undefined);
  }
  const smallScreen: boolean = useMediaQuery('(min-width: 600px)');
  return (
    <AppBar className={barClass}>
      <Tabs
        value={false}
        onChange={tabChange}
        centered={smallScreen}
        variant={smallScreen ? undefined : "scrollable"}
        scrollButtons={smallScreen ? undefined : "on"}
        textColor="white"
      >
        <Tab label={<span className={classes.tabLabel}>About me</span>} className={classes.tab} />
        <Tab label={<span className={classes.tabLabel}>Experience</span>} className={classes.tab} />
        <Tab label={<span className={classes.tabLabel}>Projects</span>} className={classes.tab} />
        <Tab label={<span className={classes.tabLabel}>Education</span>} className={classes.tab} />
        <Tab label={<span className={classes.tabLabel}>Resume</span>} className={classes.tab} />
      </Tabs>
    </AppBar>
  );
}

export default TopBar;