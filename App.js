import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/containers/home';
import Header from './src/components/shared/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home >
        <Header>
          <Text style={ {color: '#FFFFFF'} }>appName</Text>
        </Header>
        <Text>AppBar & Search</Text>
        <Text>Main Content (Categories)</Text>
        <Text>Suggerences</Text>
      </Home>
    );
  }
}