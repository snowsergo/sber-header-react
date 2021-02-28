import React from 'react';
import Header from './components/Header/Header';
import constants from './constants/items.json';
import lengthFromWidth from './helpers/lengthFromWidth';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const size = useWindowSize(lengthFromWidth);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./images', '')] = r(item);
      return null;
    });
    return images;
  }
  const images = importAll(
    require.context('./images', false, /\.(png|jpg|svg)$/)
  );
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
