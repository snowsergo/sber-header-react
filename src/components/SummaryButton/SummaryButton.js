import React from 'react';
import classes from './SummaryButton.module.css';

function SummaryButton(props) {
  const { src, text, onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      <img className={classes.icon} src={src} alt={text} />
      <p className={classes.text}>{text}</p>
    </button>
  );
}

export default SummaryButton;
