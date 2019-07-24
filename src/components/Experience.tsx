import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CompanyCard from './CompanyCard';
import lillyImage from '../images/Eli_Lilly_and_Company.svg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    experience: {
      marginBlockStart: '2.75em',
      marginBlockEnd: '2.75em'
    },
    title: {
      color: 'white',
      textAlign: 'center'
    },
    subtitle: {
      color: 'white',
      marginBlockEnd: '1em',
      textAlign: 'center'
    },
    grid: {
      backgroundColor: '#379683',
      overflow: 'hidden'
    },
    companiesGrid: {
      padding: theme.spacing(3)
    }
  })
);


const Experience: React.FC = () => {
  const classes = useStyles();
  const companies = [
    {
      image: lillyImage,
      imageWidth: '40%',
      name: 'Eli Lilly and Company',
      role: 'Research IT Intern (Summer 2019)',
      jobDescription: '',
      languagesAndFrameworks: ''
    }
  ];
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <div className={classes.experience}>
        <Typography variant='h3' className={classes.title}>
          Experience
        </Typography>
        <Typography variant='subtitle1' className={classes.subtitle}>
          (Hover on card to show details)
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {companies.map((company, key) =>
            <Grid
              item
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.companiesGrid}
            >
              <CompanyCard
                companyImage={company.image}
                companyImageWidth={company.imageWidth}
                companyName={company.name}
                companyRole={company.role}
                jobDescription={company.jobDescription}
                languagesAndFrameworks={company.languagesAndFrameworks}
                key={key}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </Grid>
  );
}

export default Experience;