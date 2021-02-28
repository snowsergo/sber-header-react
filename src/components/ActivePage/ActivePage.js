import React from 'react';
import classes from './ActivePage.module.css';

function ActivePage(props) {
  const { notification, activePage, images } = props;
  return (
    <div className={classes.ActivePage}>
      {notification ? (
        <div className={classes.label}>{notification}</div>
      ) : null}

      <img
        className={classes.icon}
        src={images[`./${activePage.src}.svg`].default}
        alt={activePage.name}
      />
      <p className={classes.text}>{activePage.name}</p>
    </div>
  );
}

export default ActivePage;
