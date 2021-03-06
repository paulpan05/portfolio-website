import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { page, topBarHeight } from '../constants/TopBarConstants';
import { scrollToComponent, scrolledUp } from '../constants/FunctionConstants';
import { TopBarProps } from '../constants/PropsConstants';

const useStyles = makeStyles(
  createStyles({
    appBarTransparent: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    tab: {
      height: topBarHeight
    },
    tabLabel: {
      fontSize: '1.4em'
    }
  })
);

const TopBar: React.FC<TopBarProps> = (props) => {
  const classes = useStyles();
  const [barClass, setBarClass] = React.useState<string | undefined>(classes.appBarTransparent);
  const handleBarTransparency = () => {
    scrolledUp(props.profile) ? setBarClass(classes.appBarTransparent) : setBarClass(undefined);
  }
  React.useEffect(() => {
    window.addEventListener('load', handleBarTransparency);
    window.addEventListener('scroll', handleBarTransparency);
    return () => {
      window.removeEventListener('load', handleBarTransparency);
      window.removeEventListener('scroll', handleBarTransparency);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      case page.Activities:
        scrollToComponent(props.activities);
        break;
      case page.Education:
        scrollToComponent(props.education);
        break;
      case page.ContactMe:
        scrollToComponent(props.contactMe);
        break;
      case page.Resume:
        window.location.href = process.env.PUBLIC_URL + '/files/Resume.pdf';
        break;
      default:
    }
  }
  const smallScreen: boolean = useMediaQuery('(min-width: 800px)');
  const tabNames = [
    'About Me',
    'Experience',
    'Projects',
    'Activities',
    'Education',
    'Contact Me',
    'Resume'
  ];
  return (
    <AppBar className={barClass}>
      <Tabs
        value={false}
        onChange={tabChange}
        centered={smallScreen}
        variant={smallScreen ? undefined : 'scrollable'}
        scrollButtons={smallScreen ? undefined : 'on'}
        textColor={'white' as any}
      >
        { tabNames.map( (tabName, key) =>
          <Tab label={<span className={classes.tabLabel}>{tabName}</span>} className={classes.tab} key={key} />
        )}
      </Tabs>
    </AppBar>
  );
}

export default TopBar;