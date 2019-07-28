import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardSection from './CardSection';
import honeyImage from '../images/Honey4Groceries.png';
import IEEEQPSP19Image from '../images/IEEE_QP_SP19.jpg';

const items = [
  {
    image: honeyImage,
    imageWidth: '60%',
    itemName: 'Honey4Groceries',
    description: 'An app for obtaining the best grocery deals',
    fullDescription:
    <Typography>
      I am part of a small project team that develops a grocery deals iOS app.
      <br/><br/> The app takes in a list of grocery items the user wants to buy
      along with the location. Subsequently, users are informed of the best
      locations to make the batch of purchases.<br/><br/>
      <b>Languages:</b> Swift, Go<br/>
      <b>Frameworks:</b> PromiseKit, SwiftyJSON, Gorilla Mux<br/>
      <b>APIs:</b> Chomp API, Foursquare Places API<br/>
    </Typography>
  },
  {
    image: IEEEQPSP19Image,
    imageWidth: '60%',
    itemName: 'IEEE Quarterly Projects (Spring 2019)',
    description: 'Home applications hardware and software project',
    fullDescription:
    <Typography>
      I was in a team of three that designs a product which is meant to improve
      households. <br/><br/>For our project, we decided on an automatically
      unlocking door which unlocks when the user swipes the correct ID on the
      RFID reader. The door closes on detection of person being close enough
      into the room, which is detected using an ultrasonic distance sensor.
      <br/><br/>
      <b>Language:</b> Arduino<br/>
    </Typography>
  }
];

const Projects: React.FC = () => {
  return (
    <CardSection
      items={items}
      cardHeight='13em'
      title='Projects'
      subtitle='(Hover or touch twice on card to show details)'
      backgroundColor='#27ae60'
      textColor='white' />
  );
}

export default Projects;