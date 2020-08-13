import React from 'react';
import Typography from '@material-ui/core/Typography';
import ieeeImage from '../images/IEEE_logo.svg';
import acmImage from '../images/acmucsd.svg';
import CardSection from './CardSection';
import { ActivitiesProps } from '../constants/PropsConstants';

const items = [
  {
    image: acmImage,
    imageWidth: '40%',
    itemName: 'Association of Computing Machinery (ACM) at UC San Diego',
    description: 'Front-end developer (Fall 2019 - Present)',
    fullDescription:
    <Typography>
      As a front-end developer for ACM UC San Diego student organization, I
      am working on the landing page. Also, I have contributed to the
      membership portal where I rewrote the codebase from JavaScript to
      TypeScript. <br /><br />
      Apart from development work, I have also hosted multiple workshops on
      Python. These workshops really helped me with being able to communicate
      my knowledge well to others. Overall, it is a great experience being
      part of this student organization.<br /><br />
      <b>Languages Used:</b> TypeScript, JavaScript, Python<br/>
      <b>Frameworks Used:</b> React, Python, Flask, Node.js<br />
      <b>Services Used:</b> Heroku, Repl.it
    </Typography>
  }, 
  {
    image: ieeeImage,
    imageWidth: '50%',
    itemName: 'IEEE at UC San Diego',
    description:
      'Technical Committee Member / Quarterly Projects Mentor ' + 
      '(Fall 2019 - Spring 2020)',
    fullDescription:
    <Typography>
      As a technical committee member of IEEE at UC San Diego, I assisted with
      various workshops on different technical topics. Apart from my role as a
      technical committee member, I was also a Quaterly Projects mentor. Being
      a mentor allows me to gain experience managing many teams, which in turn
      enhanced my social skills.
    </Typography>
  }
];

const Activities: React.FC<ActivitiesProps> = (props) => {
  return (
    <CardSection
      items={items}
      cardHeight='15em'
      title='Activities'
      subtitle='(Hover or touch twice on card to show details)'
      backgroundColor='#e74c3c'
      textColor='white'
      currentRef={props.activitiesRef}
    />
  );
}

export default Activities;