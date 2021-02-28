import React from 'react';
import classes from './HorizontalButton.module.css';

function HorizontalButton(props) {
  const { src, text, notification, onClick } = props;
  return (
    <button className={classes.Button} onClick={onClick}>
      {notification ? (
        <div className={classes.label}>{notification}</div>
      ) : null}
      <img className={classes.icon} src={src} alt={text} />
      <p className={classes.text}>{text}</p>
    </button>
  );
}

export default HorizontalButton;
