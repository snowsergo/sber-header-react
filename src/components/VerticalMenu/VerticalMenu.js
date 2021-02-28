import React, { useRef } from 'react';
import classes from './VerticalMenu.module.css';
import VerticalButton from '../VerticalButton/VerticalButton';
import useOutsideClick from '../../hooks/useOutsideClick';

function VerticalMenu(props) {
  const ref = useRef();
  const { constants, length, images, onClick, outsideClick } = props;

  useOutsideClick(ref, outsideClick);

  return (
    <div ref={ref} className={classes.Menu}>
      <div className={classes.appendix}></div>
      {constants.map((elem, index) => {
        if (index + 1 > length) {
          return (
            <VerticalButton
              key={index}
              text={elem.name}
              src={images[`./${elem.src}.svg`].default}
              notification={3}
              onClick={() => {
                onClick(elem);
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default VerticalMenu;
