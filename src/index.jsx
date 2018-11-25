import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import createGame from './scripts/init.js';

import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
      <AppContainer>
        <Component/>
      </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

const game = createGame();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}