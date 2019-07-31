import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { EducationProps } from '../constants/PropsConstants';
import { isElementVisible } from '../constants/FunctionConstants';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import UCSDImg from '../images/UCSD.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    educationGrid: {
      backgroundColor: '#2980b9',
      overflow: 'hidden'
    },
    educationSection: {
      marginBlockStart: '1.5em',
      marginBlockEnd: '1.5em'
    },
    educationSectionTitle: {
      color: 'white',
      textAlign: 'center'
    },
    educationCard: {
      width: 700,
      height: '100%',
      maxWidth: '80vw',
    },
    educationCardMedia: {
      width: '100%',
      height: '100%'
    },
    educationLogoGrid: {
      height: '15em'
    },
    educationSubtitile: {
      marginBottom: '1em'
    },
    educationCoursework: {
      marginTop: '1em'
    },
    educationCardGrid: {
      padding: theme.spacing(3)
    }
  })
);

const Education: React.FC<EducationProps> = (props) => {
  const [sectionClass, setSectionClass] = React.useState('section-enter');
  const classes = useStyles();
  const handleSectionAnimate = () => {
    let element = document.querySelector('#education');
    if (element && isElementVisible(element)) {
      setSectionClass('section-enter-active');
    }
  }
  React.useEffect(() => {
    document.addEventListener('load', handleSectionAnimate);
    document.addEventListener('scroll', handleSectionAnimate);
    return () => {
      document.removeEventListener('load', handleSectionAnimate);
      document.removeEventListener('scroll', handleSectionAnimate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.educationGrid}
      ref={props.educationRef}
      id='education'
    >
      <div className={[classes.educationSection, sectionClass].join(' ')}>
        <Typography variant='h4' className={classes.educationSectionTitle}>
          Education
        </Typography>
        <div className={classes.educationCardGrid}>
          <Card
            className={classes.educationCard}
            elevation={24}
          >
            <Grid
              container
              direction='row'
              justify='center'
              className={classes.educationLogoGrid}
            >
              <CardMedia
                src={UCSDImg}
                component='img'
                title='UC San Diego'
                className={classes.educationCardMedia}
              />
            </Grid>
            <CardContent>
              <Typography variant='h5'>
                UC San Diego
            </Typography>
              <Typography variant='subtitle1' className={classes.educationSubtitile}>
                B.S. Computer Science, Graduating June 2022
            </Typography>
              <Divider />
              <Typography variant='h6' className={classes.educationCoursework}>
                Relevant Coursework:
            </Typography>
              <Typography>
                <b>CSE 11</b> - Introduction to Computer Science and Object-Oriented Programming: Java<br />
                <b>CSE 12</b> - Basic Data Structures and Object-Oriented Design<br />
                <b>CSE 15L</b> - Software Tools and Techniques Laboratory<br />
                <b>CSE 20</b> - Discrete Mathematics<br />
                <b>CSE 21</b> - Mathematics for Algorithms and Systems<br />
                <b>CSE 30</b> - Computer Organization and Systems Programming
            </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Grid>
  );
}

export default Education;