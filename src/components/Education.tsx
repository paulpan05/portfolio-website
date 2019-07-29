import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EducationProps } from '../constants/PropsConstants';
import { isElementVisible } from '../constants/FunctionConstants';

const useStyles = makeStyles(
  createStyles({
    educationGrid: {
      backgroundColor: '#2980b9',
      overflow: 'hidden'
    },
    cardSection: {
      marginBlockStart: '2.75em',
      marginBlockEnd: '2.75em'
    },
    cardSectionTitle: {
      color: 'white',
      marginBlockEnd: '1em',
      textAlign: 'center'
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
    <div ref={props.educationRef} id='education'>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.educationGrid}
      >
        <div className={sectionClass}></div>
      </Grid>
    </div>
  );
}

export default Education;