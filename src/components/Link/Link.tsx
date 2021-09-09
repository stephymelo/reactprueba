  import React from 'react';
import './Link.css';

interface LinkProps {
  text: string;

}

export const Link: React.FC<LinkProps> = (props) => {

  let className = 'Link';
  

  return <a className={className} >
    {props.text}
  </a>;
}