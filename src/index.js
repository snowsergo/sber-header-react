import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./images', '')] = r(item);
    return null
  });
  return images;
}
const images = importAll(
  require.context('./images', false, /\.(png|jpg|svg)$/)
);

ReactDOM.render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
