import React from 'react';
import { ContactMeProps } from '../constants/PropsConstants';
import { isElementVisible } from '../constants/FunctionConstants';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubImg from '../images/GitHub.png';
import LinkedInImg from '../images/LinkedIn.png';
import FacebookImg from '../images/Facebook.png';
import InstagramImg from '../images/Instagram.png';
import SnapchatImg from '../images/Snapchat.png';
import PhoneImg from '../images/Phone.png';

const items = [
  {
    logoName: 'Phone',
    logoSrc: PhoneImg,
    siteSrc: 'tel:+16266918088'
  },
  {
    logoName: 'GitHub',
    logoSrc: GitHubImg,
    siteSrc: 'https://github.com/paulpan05'
  },
  {
    logoName: 'LinkedIn',
    logoSrc: LinkedInImg,
    siteSrc: 'https://linkedin.com/in/jpan05'
  },
  {
    logoName: 'Facebook',
    logoSrc: FacebookImg,
    siteSrc: 'https://facebook.com/paulpan05'
  },
  {
    logoName: 'Instagram',
    logoSrc: InstagramImg,
    siteSrc: 'https://instagram.com/paulpan05/'
  },
  {
    logoName: 'SnapChat',
    logoSrc: SnapchatImg,
    siteSrc: 'https://snapchat.com/add/paulpan05'
  }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactMeGrid: {
      backgroundColor: '#2c3e50',
      overflow: 'hidden'
    },
    contactMeSection: {
      marginBlockStart: '1.5em',
      marginBlockEnd: '1.5em'
    },
    contactMeSectionTitle: {
      color: 'white',
      textAlign: 'center'
    },
    contactLogo: {
      height: '4em',
    },
    contactItemGrid: {
      padding: theme.spacing(2)
    }
  })
);

const ContactMe: React.FC<ContactMeProps> = (props) => {
  const [sectionClass, setSectionClass] = React.useState('section-entering');
  const classes = useStyles();
  const handleSectionAnimate = () => {
    let element = document.querySelector('#contactme');
    if (element && isElementVisible(element)) {
      setSectionClass('section-entered');
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
      className={classes.contactMeGrid}
      ref={props.contactMeRef}
      id='contactme'
    >
      <div className={[classes.contactMeSection, sectionClass].join(' ')}>
        <Typography variant='h4' className={classes.contactMeSectionTitle}>
          Contact Me
        </Typography>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {items.map((item, key) =>
            <div
              className={classes.contactItemGrid}
              key={key}
            >
              <a href={item.siteSrc}>
                <img alt={item.logoName} src={item.logoSrc} className={classes.contactLogo} />
              </a>
            </div>
          )}
        </Grid>
      </div>
    </Grid>
  );
}

export default ContactMe;