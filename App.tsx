/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import MainScreen from './src/component/mainscreen/mian';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
