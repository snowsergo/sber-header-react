import React, { useRef } from 'react';
import classes from './Summary.module.css';

import coins from '../../images/coins.svg';
import person from '../../images/person.svg';
import bell from '../../images/bell.svg';
import logout from '../../images/logout.svg';
import SummaryButton from '../SummaryButton/SummaryButton';
import useOutsideClick from '../../hooks/useOutsideClick';

function Summary(props) {
  const ref = useRef();

  const { onClick, status, onOutsideClick } = props;
  const cls = [classes.Summary, classes[status]];

  useOutsideClick(ref, onOutsideClick);

  return (
    <div ref={ref} className={cls.join(' ')}>
      <div className={classes.appendix}></div>

      <div className={classes.coins}>
        <img className={classes.icon} src={coins} alt='coins' />
        <p className={classes.coinsText}>
          146 480 <span>монет</span>
        </p>
      </div>
      <div className={classes.buttons}>
        <SummaryButton src={bell} text={'Notification'} onClick={onClick} />
        <SummaryButton src={person} text={'Profile'} onClick={onClick} />
        <SummaryButton src={logout} text={'Log out'} onClick={onClick} />
      </div>
    </div>
  );
}

export default Summary;
