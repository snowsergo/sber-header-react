import React from 'react';
import classes from './SummaryMenuButton.module.css';

function SummaryMenuButton(props) {
  const { src, onClick } = props;
  return (
    <button className={classes.menuButton} onClick={onClick}>
      <img className={classes.icon} src={src} alt='menu' />
    </button>
  );
}

export default SummaryMenuButton;
