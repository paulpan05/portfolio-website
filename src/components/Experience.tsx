import React from 'react';
import Typography from '@material-ui/core/Typography';
import lillyImage from '../images/Eli_Lilly_and_Company.svg';
import acmucsdImage from '../images/acmucsd.svg';
import CardSection from './CardSection';
import { ExperienceProps } from '../constants/PropsConstants';

const items = [
  {
    image: lillyImage,
    imageWidth: '40%',
    itemName: 'Eli Lilly and Company',
    description: 'Research IT Intern (Summer 2019)',
    fullDescription:
    <Typography>
      My project at Lilly consisted of developing a game to educate scientists
      about how the placement of amino acids on an antibody's germline affect
      immunogenicity.<br /><br />
      For the purpose of making the game responsive, I improved the runtime
      of bioinformatics scoring and alignment algorithms such as
      Needleman-Wunsch. I also worked on the front-end and wrote unit
      tests for React components before each release.<br/><br/>
      In developing the back-end of the game, I aided the transition of
      on-premise servers at Lilly to AWS through testing each of the AWS
      offerings. I then reported to the DevOps team regarding the feasibility
      of using each of them for the game. This information could give insight
      into the AWS services that will most suite Lilly's software development
      in the future.<br /><br />
      <b>Languages:</b> TypeScript, Go, HTML, CSS, JavaScript<br/>
      <b>Frameworks:</b> React, Jest, D3.js, Gorilla Mux, Material-UI<br />
      <b>Services:</b> AWS Cognito, AWS API Gateway, AWS Lambda, AWS DynamoDB
    </Typography>
  }, 
  {
    image: acmucsdImage,
    imageWidth: '40%',
    itemName: 'ACM UC San Diego',
    description: 'Front-end Developer (Fall 2019 - Present)',
    fullDescription:
    <Typography>
      As a front-end developer at ACM UC San Diego, I help maintain the
      organization's membership portal, fixing bugs and styling issues. I am
      also the primary contributor to the implementation of the ACM landing
      page based on the designs from the organization's Design Team.<br />
      <br />Apart from web pages for ACM, I contributed to the development of
      various event websites of events hosted by ACM, such as a startup
      recruitment fair happening in Spring of 2020. <br /><br />
      <b>Languages:</b> TypeScript, JavaScript, HTML, CSS, LESS<br />
      <b>Frameworks and Tools:</b> React, CircleCI
    </Typography>
  }
];

const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <CardSection
      items={items}
      cardHeight='15em'
      title='Experience'
      subtitle='(Hover or touch twice on card to show details)'
      backgroundColor='#16a085'
      textColor='white'
      currentRef={props.experienceRef}
    />
  );
}

export default Experience;