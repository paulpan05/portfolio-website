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
  const handleTouchEnd = (flipCard: Element, effectStates: { cardTouched: boolean; timeDuration: number; }) => {
    if (new Date().valueOf() - effectStates.timeDuration < 120) {
      effectStates.cardTouched = !effectStates.cardTouched;
      if (!effectStates.cardTouched) {
        flipCard.className += ' flip-card-touched';
      } else {
        flipCard.className = flipCard.className.replace(' flip-card-touched', '');
      }
    }
  }
  React.useEffect(() => {
    const flipCard = document.querySelector('.flip-card') as Element
    let effectStates = { cardTouched: false, timeDuration: 0 };
    flipCard.addEventListener('touchstart', () => {
      effectStates.timeDuration = new Date().valueOf();
    });
    flipCard.addEventListener('touchend', () => handleTouchEnd(flipCard, effectStates));
    return () => {
      flipCard.removeEventListener('touchstart', () => {
        effectStates.timeDuration = new Date().valueOf();
      });
      flipCard.removeEventListener('touchend', () => handleTouchEnd(flipCard, effectStates));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card className={[classes.itemCard, 'flip-card'].join(' ')} elevation={24}>
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