import React from 'react';
import {Provider} from 'react-redux';
import storeConfig from './src/store/storeConfig';
import Navigaton from './src/Navigaton';

const store = storeConfig();

export default () => {
  return (
    <Provider store={store}>
      <Navigaton />
    </Provider>
  );
};
