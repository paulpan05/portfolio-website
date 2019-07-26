import React from 'react';
import Typography from '@material-ui/core/Typography';
import lillyImage from '../images/Eli_Lilly_and_Company.svg';
import CardSection from './CardSection';

const items = [
  {
    image: lillyImage,
    imageWidth: '40%',
    itemName: 'Eli Lilly and Company',
    description: 'Research IT Intern (Summer 2019)',
    fullDescription:
    <Typography>
      My project at Lilly consists of developing a game to educate scientists
      about how the placement of amino acids affect the binding of antigen
      to antibodies.<br/><br/>
      In the process of making the game responsive, I am improving on the
      runtime of bioinformatics algorithms such as Needleman-Wunsch. I am also
      working on the front-end and writing unit tests for React components
      before each release.<br/><br/>
      <b>Languages and Frameworks:</b> TypeScript, Golang, React, Jest, D3.js,
      Gorilla Mux, AWS Lambda, HTML, CSS, JavaScript
    </Typography>,
  }
];

const Experience: React.FC = () => {
  return (
    <CardSection
      items={items}
      cardHeight='10em'
      title='Experience'
      subtitle='(Hover or touch twice on card to show details)'
      backgroundColor='#379683'
      textColor='white' />
  );
}

export default Experience;