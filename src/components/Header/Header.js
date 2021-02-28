import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Summary from '../Summary/Summary';
import SummaryMenuButton from '../SummaryMenuButton/SummaryMenuButton';
import classes from './Header.module.css';
import useClosingSize from '../../hooks/useClosingSize';

function Header(props) {
  const { constants, length, images } = props;
  const [isSummaryOpen, setSummary] = useState(false);

  function handleSummary() {
    setSummary(!isSummaryOpen);
  }

  function closeSummary() {
    if (isSummaryOpen) {
      setSummary(false);
    }
  }

  useClosingSize(setSummary);

  return (
    <header className={classes.Header}>
      <div className={classes.titleSection}>
        <img
          className={classes.logo}
          src={images[`./logo.svg`].default}
          alt='logo'
        />
        <h1 className={classes.title}>Libra</h1>
      </div>
      <Navigation constants={constants} length={length} images={images} />

      <Summary
        status={isSummaryOpen ? 'open' : 'close'}
        onClick={handleSummary}
        onOutsideClick={closeSummary}
      />
      <SummaryMenuButton
        src={images[`./person+.svg`].default}
        onClick={handleSummary}
      />
    </header>
  );
}

export default Header;
