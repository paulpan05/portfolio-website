import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ItemCard from './ItemCard';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardSectionGrid: {
      backgroundColor: '#379683',
      overflow: 'hidden'
    },
    cardSection: {
      marginBlockStart: '2.75em',
      marginBlockEnd: '2.75em'
    },
    cardSectionTitle: {
      color: 'white',
      textAlign: 'center'
    },
    cardSectionSubtitle: {
      color: 'white',
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
}

const CardSection: React.FC<CardSectionProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.cardSectionGrid}
    >
      <div className={classes.cardSection}>
        <Typography variant='h3' className={classes.cardSectionTitle}>
          Experience
        </Typography>
        <Typography variant='subtitle1' className={classes.cardSectionSubtitle}>
          (Hover on card to show details)
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
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.cardsGrid}
            >
              <ItemCard
                image={item.image}
                imageWidth={item.imageWidth}
                itemName={item.itemName}
                description={item.description}
                fullDescription={item.fullDescription}
                cardHeight={props.cardHeight}
                key={key}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </Grid>
  );
}

export default CardSection;