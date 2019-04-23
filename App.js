import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/containers/home';
import Header from './src/components/shared/header';
import Suggestions from './src/containers/suggestion-list';

// import api service
import categoryService from './src/api/categories';

type Props = {};
export default class App extends Component<Props> {

  state = {
    categories: []
  };

  async componentDidMount(){
    let categories = [];
    let snapshot = await categoryService.getAll()
    if(snapshot.size > 0){
      snapshot.forEach(function(doc) {
        categories.push({
            id: doc.id,
            ...doc.data()
          });
      });
    }
    this.setState({
      categories
    });
    console.log(categories);
  }

  render() {
    return (
      <Home >
        <Header>
          <Text style={ {color: '#FFFFFF'} }>Proyectando mi vida</Text>
        </Header>
        <Text>Search</Text>
        <Text>Categories</Text>
        <Suggestions list={this.state.categories}></Suggestions>
      </Home>
    );
  }
}