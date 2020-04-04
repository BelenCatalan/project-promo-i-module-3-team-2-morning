import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.scss';
import App from './components/App';
import Footer from './components/card/Footer';
import * as serviceWorker from './serviceWorker';
import Header from './components/card/Header';
import Preview from './components/card/MainComponents/Preview';
// import Share from './components/card/MainComponents/Share';
ReactDOM.render(
  <React.StrictMode>
    <Preview />

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
