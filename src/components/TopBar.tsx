import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { page, topBarHeight } from '../constants/TopBarConstants'
import { scrollToComponent, scrolledUp } from '../constants/FunctionConstants';

type TopBarProps = {
  aboutMe: React.RefObject<HTMLDivElement>
  experience: React.RefObject<HTMLDivElement>
  projects: React.RefObject<HTMLDivElement>
  education: React.RefObject<HTMLDivElement>
  profile: React.RefObject<HTMLDivElement>
  contactMe: React.RefObject<HTMLDivElement>
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
  const handleBarTransparency = () => {
    scrolledUp(props.profile) ? setBarClass(classes.appBarTransparent) : setBarClass(undefined);
  }
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
      case page.ContactMe:
        scrollToComponent(props.contactMe);
        break;
      default:
    }
  }
  React.useEffect(() => {
    window.addEventListener('load', handleBarTransparency);
    window.addEventListener('scroll', handleBarTransparency);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    return () => {
      window.addEventListener('load', handleBarTransparency);
      window.addEventListener('scroll', handleBarTransparency);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  window.onscroll = () => {
  }
  const smallScreen: boolean = useMediaQuery('(min-width: 700px)');
  const tabNames = [
    "About Me",
    "Experience",
    "Projects",
    "Education",
    "Resume",
    "Contact Me"
  ];
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
        { tabNames.map( (tabName, key) =>
          <Tab label={<span className={classes.tabLabel}>{tabName}</span>} className={classes.tab} key={key} />
        )}
      </Tabs>
    </AppBar>
  );
}

export default TopBar;