import React from 'react';
import classes from './VerticalButton.module.css';

function VerticalButton(props) {
  const { src, text, notification, onClick } = props;

  return (
    <button className={classes.Button} onClick={onClick}>
      <div className={classes.label}>{notification}</div>
      <img className={classes.icon} src={src} alt={text} />
      <p className={classes.text}>{text}</p>
    </button>
  );
}

export default VerticalButton;
