import React from 'react';
import Header from './components/Header/Header';
import constants from './constants/items.json';
import lengthFromWidth from './helpers/lengthFromWidth';
import useWindowSize from './hooks/useWindowSize';

function App(props) {
  const { images } = props;
  const size = useWindowSize(lengthFromWidth);

  return (
    <div className='App'>
      <Header
        constants={constants}
        length={size.length}
        images={images}
      ></Header>
    </div>
  );
}

export default App;
