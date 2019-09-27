import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardSection from './CardSection';
import containerizeImage from '../images/Containerize.png';
import honeyImage from '../images/Honey4Groceries.png';
import easyTourImage from '../images/Easy_Tour.svg';
import solvingClimateChangeImage from '../images/Solving_Climate_Change.png';
import IEEEQPSP19Image from '../images/IEEE_QP_SP19.jpg';
import { ProjectsProps } from '../constants/PropsConstants';

const items = [
  {
    image: containerizeImage,
    imageWidth: '70%',
    itemName: 'Containerize',
    description: 'Markdown note-taking web app with integrations',
    fullDescription:
      <Typography>
        This is a web app that I have personally worked on which allows
        signed-in users to take notes in markdown.
        <br /><br />
        As the development of the app progresses, I hope to integrate other
        extensions into the notes, including a messaging board where people
        who have access to a particular note can talk with each other.
        <br /><br />
        Currently there is also a playground included with the web app where
        users can practice markdown.
        <br /><br />
        <b>Languages:</b> TypeScript, JavaScript, HTML, CSS<br />
        <b>Frameworks:</b> React, Node.js, GraphQL<br />
        <b>Services:</b> AWS Amplify, AWS API Gateway, AWS Lambda, AWS DynamoDB
      </Typography>
  },
  {
    image: honeyImage,
    imageWidth: '80%',
    itemName: 'Honey4Groceries',
    description: 'An app for obtaining the best grocery deals',
    fullDescription:
      <Typography>
        I am part of a small project team that develops a grocery deals iOS
        app.
        <br /><br />
        The app takes in a list of grocery items the user wants to buy along
        with the location. Subsequently, users are informed of the best
        locations to make the batch of purchases.
        <br /><br />
        <b>Languages:</b> Swift, Go<br />
        <b>Frameworks:</b> PromiseKit, SwiftyJSON, Gorilla Mux<br />
        <b>APIs:</b> Chomp API, Foursquare Places API
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
        <b>Languages:</b> Arduino
      </Typography>
  }
];

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <CardSection
      items={items}
      cardHeight='15em'
      title='Projects'
      subtitle='(Hover or touch twice on card to show details)'
      backgroundColor='#27ae60'
      textColor='white'
      currentRef={props.projectsRef}
    />
  );
}

export default Projects;