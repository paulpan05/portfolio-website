import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardSection from './CardSection';
import PaulUrlImage from '../images/Paul_Url.png';
import TritonExchangeImage from '../images/triton-exchange.png';
import SideTrackImage from '../images/sidetrack.png';
import ContainerizeImage from '../images/Containerize.png';
import { ProjectsProps } from '../constants/PropsConstants';

const items = [
  {
    image: TritonExchangeImage,
    imageWidth: '80%',
    itemName: 'Triton Exchange',
    description: 'Online marketplace for UCSD.',
    fullDescription:
      <Typography>
        Over the course of 2 months. I worked with a team of 10 people on
        making an online marketplace that is capable of replacing the current
        free and for sale Facebook groups at UCSD. Since there are too many
        places students would have to look for in the page to buy items, and
        there is no one consolidated place where sellers can sell the items.
        We decided a consolidated marketplace is the best idea. The
        trustworthiness of the entire marketplace is backed by our buyer and
        seller review system.
        <br /><br />
        <b>Languages:</b> TypeScript, SASS <br />
        <b>Frameworks:</b> React, Node.js <br />
        <b>Services: </b> AWS DynamoDB, Amazon S3, AWS Lambda, AWS API Gateway
      </Typography>
  },
  {
    image: SideTrackImage,
    imageWidth: '70%',
    itemName: 'SideTrack',
    description: 'Pothole detection app with convolutional neural networks.',
    fullDescription:
      <Typography>
        At LA Hacks 2020, my team of 4 people implemented an iOS Swift
        application which warns users when they are driving over potholes. The
        application is able to collect where the potholes are on the road based
        on real time footage from the car. The recorded footage is then
        compressed and sent to the server at the end of each trip for
        classification using a CNN in TensorFlow. The classified pothole, along
        with the geolocation at the time, is recorded for warning future users
        who are driving along the same stretch of road.
        <br /><br />
        <b>Languages:</b> Python, Swift <br />
        <b>Frameworks:</b> Flask, TensorFlow, Keras <br />
        <b>Services: </b> GCP TPU, Google Cloud's Compute Engine
      </Typography>
  },
  {
    image: PaulUrlImage,
    imageWidth: '80%',
    itemName: 'PaulUrl.com',
    description: 'URL shortener with Java as back-end',
    fullDescription:
      <Typography>
        I developed a personal URL shortener app for the links I go on most
        frequently. Going to the homepage shows all URL's I have put into
        the database. Authentication to the back-end is handled by Java's
        Spring framework security.
        <br /><br />
        <b>Languages:</b> Java, PostgreSQL, TypeScript, JavaScript, HTML, CSS <br />
        <b>Frameworks and Tools:</b> Spring MVC, TravisCI
      </Typography>
  },
  {
    image: ContainerizeImage,
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