import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/containers/home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home >
        <Text>Header</Text>
        <Text>AppBar & Search</Text>
        <Text>Main Content (Categories)</Text>
        <Text>Suggerences</Text>
      </Home>
    );
  }
}