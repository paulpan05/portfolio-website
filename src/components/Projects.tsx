import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardSection from './CardSection';
import honeyImage from '../images/Honey4Groceries.png';
import easyTourImage from '../images/Easy_Tour.svg';
import solvingClimateChangeImage from '../images/Solving_Climate_Change.png';
import IEEEQPSP19Image from '../images/IEEE_QP_SP19.jpg';
import { ProjectsProps } from '../constants/PropsConstants';

const items = [
  {
    image: honeyImage,
    imageWidth: '80%',
    itemName: 'Honey4Groceries',
    description: 'An app for obtaining the best grocery deals',
    fullDescription:
      <Typography>
        I am part of a small project team that develops a grocery deals iOS app.
        <br /><br />
        The app takes in a list of grocery items the user wants to buy along
        with the location. Subsequently, users are informed of the best
        locations to make the batch of purchases.
        <br /><br />
        <b>Languages:</b> Swift, Go<br />
        <b>Frameworks:</b> PromiseKit, SwiftyJSON, Gorilla Mux<br />
        <b>APIs:</b> Chomp API, Foursquare Places API<br />
      </Typography>
  },
  {
    image: easyTourImage,
    imageWidth: '100%',
    itemName: 'Easy Tour',
    description: 'LA Hacks 2019 travel suggestions app based on emotions',
    fullDescription:
      <Typography>
        I was part of a team for LA Hacks 2019 that develops a web app of
        providing users with travel itineraries based on human emotions.
        <br /><br />
        In order to implement the app, all the images of a certain location
        are obtained from the Flickr API, which is then passed onto Google's
        Natural Language API to determine the emotions that the pictures evoke.
        Then, the itineraries are ranked based on the closeness to the user's
        emotions, and the best itinerary is displayed on an animated map.
        <br /><br />
        <b>Languages:</b> HTML, CSS, JavaScript<br />
        <b>Frameworks:</b> Chart.js, Node.js, jQuery<br />
        <b>APIs:</b> Flickr API, Google Natural Language API, Mapbox API
      </Typography>
  },
  {
    image: solvingClimateChangeImage,
    imageWidth: '100%',
    itemName: 'Solving Climate Change Website',
    description: 'Informative website regarding ways to tackle climate change',
    fullDescription:
      <Typography>
        I designed a website to target an audience that may be aware of climate
        change but are unable to decide what to do to alleviate it.
        <br /><br />
        Graphs and embedded video and Instagram links serve to captivate the
        audience into reading more about the text on the website.
        <br /><br />
        <b>Languages:</b> HTML, CSS, JavaScript<br />
        <b>Frameworks:</b> Chart.js
      </Typography>
  },
  {
    image: IEEEQPSP19Image,
    imageWidth: '80%',
    itemName: 'IEEE Quarterly Projects (Spring 2019)',
    description: 'Home applications hardware and software project',
    fullDescription:
      <Typography>
        I was in a team of three that designs a product which is meant to
        improve households.
        <br /><br />
        For our project, we decided on an automatically unlocking door which
        unlocks when the user swipes the correct ID on the RFID reader. The
        door closes on detection of person being close enough into the room,
        which is signaled an ultrasonic distance sensor.
        <br /><br />
        <b>Languages:</b> Arduino<br />
      </Typography>
  }
];

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <CardSection
      items={items}
      cardHeight='13em'
      title='Projects'
      subtitle='(Hover or touch twice on card to show details)'
      backgroundColor='#27ae60'
      textColor='white'
      currentRef={props.projectsRef}
    />
  );
}

export default Projects;