import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, createStyles } from '@material-ui/styles';
import '../css/Cards.css';
import Grid from '@material-ui/core/Grid';

  const useStyles = makeStyles(
    createStyles({
      card: {
        width: 500,
        height: '100%',
        maxWidth: '90vw'
      },
      cardMedia: {
        width: (props: CompanyCardProps) => props.companyImageWidth
      },
      logoGrid: {
        height: '10em'
      }
    })
  );

type CompanyCardProps = {
  companyImage: string
  companyImageWidth: string
  companyName: string
  companyRole: string
  jobDescription: string
  languagesAndFrameworks: string
}

const CompanyCard: React.FC<CompanyCardProps> = (props) => {
  const classes = useStyles(props);
  return (
    <Card className={[classes.card, 'flip-card'].join(' ')} elevation={24}>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.logoGrid}
          >
            <CardMedia
              src={props.companyImage}
              component="img"
              title={props.companyName}
              className={classes.cardMedia}
            />
          </Grid>
          <CardContent>
            <Typography variant="h5">
              {props.companyName}
            </Typography>
            <Typography variant='subtitle1'>
              {props.companyRole}
            </Typography>
          </CardContent>
        </div>
        <div className='flip-card-back'>
          <CardContent>
            <Typography variant='h5'>Hello World!onaoio pjwifjpoo gnsdfngp agjpwjpio ihepghepghu piupghuphup ugipoipodf sigohiodfsh gphsdpo fgopfiopgh posdhgopfhi dfioghspdg dsgHello World!onaoio pjwifjpoo gnsdfngp agjpwjpio ihepghepghu piupghuphup ugipoipodf sigohiodfsh gphsdpo fgopfiopgh posdhgopfhi dfioghspdg dsgHello World!onaoio pjwifjpoo gnsdfngp agjpwjpio ihepghepghu piupghuphup ugipoipodf sigohiodfsh gphsdpo fgopfiopgh posdhgopfhi dfioghspdg dsgHello World!onaoio pjwifjpoo gnsdfngp agjpwjpio ihepghepghu piupghuphup ugipoipodf sigohiodfsh gphsdpo fgopfiopgh posdhgopfhi dfioghspdg dsgHello World!onaoio pjwifjpoo gnsdfngp agjpwjpio ihepghepghu piupghuphup ugipoipodf sigohiodfsh gphsdpo fgopfiopgh posdhgopfhi dfioghspdg dsgHello World!onaoio pjwifjpoo gnsdfngp agjpwjpio ihepghepghu piupghuphup ugipoipodf sigohiodfsh gphsdpo fgopfiopgh posdhgopfhi dfioghspdg dsgHello World!onaoio pjwifjpoo gnsdfngp agjpwjpio ihepghepghu piupghuphup ugipoipodf sigohiodfsh gphsdpo fgopfiopgh posdhgopfhi dfioghspdg dsg</Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
export default CompanyCard;