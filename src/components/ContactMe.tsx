import React from 'react';
import { ContactMeProps } from '../constants/PropsConstants';

const ContactMe: React.FC<ContactMeProps> = (props) => {
  return (<div ref={props.contactMeRef}></div>);
}

export default ContactMe;