import React from 'react';
import Typography from '@material-ui/core/Typography';
import lillyImage from '../images/Eli_Lilly_and_Company.svg';
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