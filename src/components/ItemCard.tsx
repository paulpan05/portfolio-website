import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, createStyles } from '@material-ui/styles';
import '../css/ItemCardTransitions.css';
import { ItemCardProps } from '../constants/PropsConstants';

const useStyles = makeStyles(
  createStyles({
    itemCard: {
      width: 500,
      height: '100%',
      maxWidth: '90vw'
    },
    itemCardMedia: {
      width: (props: ItemCardProps) => props.imageWidth
    },
    itemLogoGrid: {
      height: (props: ItemCardProps) => props.cardHeight
    }
  })
);

const CompanyCard: React.FC<ItemCardProps> = (props) => {
  const classes = useStyles(props);
  const [touchStartTime, setTouchStartTime] = React.useState(0);
  const [cardCurrentClass, setCardCurrentClass] = React.useState('');
  const handleTouchStart = () => {
    setTouchStartTime(new Date().valueOf());
  }
  const handleTouchEnd = () => {
    if (new Date().valueOf() - touchStartTime > 500) {
      switch (cardCurrentClass) {
        case '':
          setCardCurrentClass('flip-card-touched');
          break;
        case 'flip-card-touched':
          setCardCurrentClass('');
          break;
        default:
      }
    }
  }
  React.useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    }
  }, []);
  return (
    <Card className={[classes.itemCard, 'flip-card', cardCurrentClass].join(' ')} elevation={24}>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.itemLogoGrid}
          >
            <CardMedia
              src={props.image}
              component="img"
              title={props.itemName}
              className={classes.itemCardMedia}
            />
          </Grid>
          <CardContent>
            <Typography variant="h5">
              {props.itemName}
            </Typography>
            <Typography variant='subtitle1'>
              {props.description}
            </Typography>
          </CardContent>
        </div>
        <div className='flip-card-back'>
          <CardContent>
            {props.fullDescription}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
export default CompanyCard;