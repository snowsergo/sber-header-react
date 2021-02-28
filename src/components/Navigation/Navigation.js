import React, { useState } from 'react';
import classes from './Navigation.module.css';
import ActivePage from '../ActivePage/ActivePage';
import HorizontalButton from '../HorizontalButton/HorizontalButton';
import VerticalMenu from '../VerticalMenu/VerticalMenu';
import SummaryMenuButton from '../SummaryMenuButton/SummaryMenuButton';
import useClosingSize from '../../hooks/useClosingSize';

function Navigation(props) {
  const { constants, images, length } = props;
  const [activePage, setActivePage] = useState(constants[0]);
  const [isVerticalMenuOpen, setVerticalMenu] = useState(false);

  function setPage(page) {
    setActivePage(page);
  }

  function handleVerticlaMenu() {
    setVerticalMenu(!isVerticalMenuOpen);
  }

  function closeMenu() {
    if (isVerticalMenuOpen) {
      setVerticalMenu(false);
    }
  }

  useClosingSize(setVerticalMenu);

  return (
    <div className={classes.Navigation}>
      <ActivePage notification={3} activePage={activePage} images={images} />

      {constants.map((elem, index) => {
        if (index + 1 <= length && length) {
          return (
            <HorizontalButton
              key={index}
              text={elem.name}
              src={images[`./${elem.src}.svg`].default}
              notification={3}
              onClick={() => setPage(elem)}
            />
          );
        }
        return null;
      })}

      {length <= 8 && length >= 0 ? (
        <div className={classes.additional}>
          {length ? (
            <HorizontalButton
              src={images[`./more.svg`].default}
              text={'More'}
              onClick={handleVerticlaMenu}
            />
          ) : (
            <SummaryMenuButton
              src={images[`./hamburger+.svg`].default}
              onClick={handleVerticlaMenu}
            />
          )}
          {isVerticalMenuOpen ? (
            <VerticalMenu
              constants={constants}
              length={length}
              images={images}
              outsideClick={closeMenu}
              onClick={(elem) => {
                setPage(elem);
                handleVerticlaMenu();
              }}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Navigation;
