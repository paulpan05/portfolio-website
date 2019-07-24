import React from 'react';
import lillyImage from '../images/Eli_Lilly_and_Company.svg';
import Typography from '@material-ui/core/Typography';
import CardSection from './CardSection';

const items = [
  {
    image: lillyImage,
    imageWidth: '40%',
    itemName: 'Eli Lilly and Company',
    description: 'Research IT Intern (Summer 2019)',
    fullDescription: <Typography></Typography>,
  }
];

const Experience: React.FC = () => {
  return (
    <CardSection items={items} cardHeight='10em' />
  );
}

export default Experience;