import React from 'react';
import './Card.css';

const Card= (props) => {
  const classes = `card `+ props.className;
  const identity = props.id
  
  return <div id = {identity} className={classes}>{props.children}</div>;
}

export default Card;

