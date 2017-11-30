/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

registerScreens(store, Provider);

export default class App extends Component {

  constructor(props) {
    super(props)
    this.runApp();
  }
  runApp() {
      Navigation.startSingleScreenApp({
          screen: { screen: 'test.SplashScreen' },
      });
  }
}
