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
      maxWidth: '80vw'
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
  const handleTouchEnd =
    (
      flipCard: Element,
      effectStates:
        {
          cardTouched: boolean;
          timeDuration: number;
          touchMoving: boolean;
        }
    ) => {
      if (new Date().valueOf() - effectStates.timeDuration < 500 && !effectStates.touchMoving) {
        effectStates.cardTouched = !effectStates.cardTouched;
        if (!effectStates.cardTouched) {
          flipCard.className += ' flip-card-touched';
        } else {
          flipCard.className = flipCard.className.replace(' flip-card-touched', '');
        }
      }
      effectStates.touchMoving = false;
    }
  React.useEffect(() => {
    const flipCard =
      document.querySelectorAll('.' + props.sectionTitle.toLowerCase()).item(props.cardNumber)
    let effectStates = { cardTouched: false, timeDuration: 0, touchMoving: false };
    const setTimeDuration = () => {
      effectStates.timeDuration = new Date().valueOf();
    }
    const setTouchMovingTrue = () => {
      effectStates.touchMoving = true;
    }
    const doHandleTouchEnd = () => {
      handleTouchEnd(flipCard, effectStates)
    }
    flipCard.addEventListener('touchstart', setTimeDuration);
    flipCard.addEventListener('touchmove', setTouchMovingTrue);
    flipCard.addEventListener('touchend', doHandleTouchEnd);
    return () => {
      flipCard.removeEventListener('touchstart', setTimeDuration);
      flipCard.removeEventListener('touchmove', setTouchMovingTrue);
      flipCard.removeEventListener('touchend', doHandleTouchEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card
      className={[classes.itemCard, 'flip-card', props.sectionTitle.toLowerCase()].join(' ')}
      elevation={24}
    >
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            className={classes.itemLogoGrid}
          >
            <CardMedia
              src={props.image}
              component='img'
              title={props.itemName}
              className={classes.itemCardMedia}
            />
          </Grid>
          <CardContent>
            <Typography variant='h5'>
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