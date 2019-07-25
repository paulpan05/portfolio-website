import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ItemCard from './ItemCard';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../css/CardSectionTransitions.css';
import { isElementVisible } from '../constants/FunctionConstants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardSectionGrid: {
      backgroundColor: (props: CardSectionProps) => props.backgroundColor,
      overflow: 'hidden'
    },
    cardSection: {
      marginBlockStart: '2.75em',
      marginBlockEnd: '2.75em'
    },
    cardSectionTitle: {
      color: (props: CardSectionProps) => props.textColor,
      textAlign: 'center'
    },
    cardSectionSubtitle: {
      color: (props: CardSectionProps) => props.textColor,
      marginBlockEnd: '1em',
      textAlign: 'center'
    },
    cardsGrid: {
      padding: theme.spacing(3)
    }
  })
);

type CardSectionProps = {
  items:
  {
    image: string
    imageWidth: string
    itemName: string
    description: string
    fullDescription: JSX.Element
  }[]
  cardHeight: string
  title: string
  subtitle: string
  backgroundColor: string
  textColor: string
}

const CardSection: React.FC<CardSectionProps> = (props) => {
  const [cardClass, setCardClass] = React.useState('card-section-enter');
  const classes = useStyles(props);
  const handleCardAnimate = () => {
    let element = document.querySelector('#card-section-grid');
    if (element && isElementVisible(element)) {
      setCardClass('card-section-enter-active');
    }
  }
  React.useEffect(() => {
    window.addEventListener('load', handleCardAnimate);
    window.addEventListener('scroll', handleCardAnimate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    return () => {
      window.addEventListener('load', handleCardAnimate);
      window.addEventListener('scroll', handleCardAnimate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id='card-section-grid'>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.cardSectionGrid}
      >
        <div className={[classes.cardSection, cardClass].join(' ')}>
          <Typography variant='h3' className={classes.cardSectionTitle} id='section-title'>
            {props.title}
          </Typography>
          <Typography variant='subtitle1' className={classes.cardSectionSubtitle}>
            {props.subtitle}
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {props.items.map((item, key) =>
              <Grid
                item
                className={classes.cardsGrid}
                key={key}
              >
                <ItemCard
                  image={item.image}
                  imageWidth={item.imageWidth}
                  itemName={item.itemName}
                  description={item.description}
                  fullDescription={item.fullDescription}
                  cardHeight={props.cardHeight}
                />
              </Grid>
            )}
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default CardSection;