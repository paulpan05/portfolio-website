import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../css/SectionTransitions.css';
import { isElementVisible } from '../constants/FunctionConstants';
import { CardSectionProps } from '../constants/PropsConstants';
import ItemCard from './ItemCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardSectionGrid: {
      backgroundColor: (props: CardSectionProps) => props.backgroundColor,
      overflow: 'hidden'
    },
    cardSection: {
      marginBlockStart: '1.5em',
      marginBlockEnd: '1.5em'
    },
    cardSectionTitle: {
      color: (props: CardSectionProps) => props.textColor,
      textAlign: 'center'
    },
    cardSectionSubtitle: {
      color: (props: CardSectionProps) => props.textColor,
      textAlign: 'center'
    },
    cardsGrid: {
      padding: theme.spacing(3)
    }
  })
);

const CardSection: React.FC<CardSectionProps> = (props) => {
  const [sectionClass, setSectionClass] = React.useState('section-enter');
  const classes = useStyles(props);
  const handleSectionAnimate = () => {
    let element = document.querySelector('#' + props.title.toLowerCase());
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
      className={classes.cardSectionGrid}
      ref={props.currentRef}
      id={props.title.toLowerCase()}
    >
      <div className={[classes.cardSection, sectionClass].join(' ')}>
        <Typography variant='h4' className={classes.cardSectionTitle}>
          {props.title}
        </Typography>
        <Typography variant='subtitle1' className={classes.cardSectionSubtitle}>
          {props.subtitle}
        </Typography>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {props.items.map((item, key) =>
            <div
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
                cardNumber={key}
                sectionTitle={props.title}
              />
            </div>
          )}
        </Grid>
      </div>
    </Grid>
  );
}

export default CardSection;