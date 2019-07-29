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
      My project at Lilly consists of developing a game to educate scientists
      about how the placement of amino acids on an antibody's germline affect
      immunogenicity.<br/><br/>
      In the process of making the game responsive, I am improving the runtime
      of bioinformatics scoring and alignment algorithms such as
      Needleman-Wunsch. I am also working on the front-end and writing unit
      tests for React components before each release.<br/><br/>
      <b>Languages:</b> TypeScript, Go, HTML, CSS, JavaScript<br/>
      <b>Frameworks:</b> React, Jest, D3.js, Gorilla Mux, AWS Lambda,
      Material-UI
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
      backgroundColor='#379683'
      textColor='white'
      currentRef={props.experienceRef}
    />
  );
}

export default Experience;