import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Home from './src/containers/home';
import Header from './src/components/shared/header';
import Suggestions from './src/containers/suggestion-list';
import Categories from './src/containers/category-list';
// import Video from 'react-native-video';

// import api service
import categoryService from './src/api/categories';

type Props = {};
export default class App extends Component<Props> {

  state = {
    suggestions: [],
    categories: [],
  };

  async componentDidMount(){
    let categories = [];
    categoryService.getAll().onSnapshot(querySnapshot => {
      if(querySnapshot.size > 0){
        querySnapshot.forEach(function(doc) {
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
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }

  render() {
    return (
      <Home >
        <Header>
          <Text style={ {color: '#FFFFFF'} }>Proyectando mi vida</Text>
        </Header>

        <View style={{
                    flex: 1,
                    height: 100
                }}>
          {/* <Video source={{ uri: 'http://cbc.co/wp-content/uploads/2016/07/cbc-toma-vida-1.mp4' }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
                resizeMode="contain"
           /> */}
        </View>
        <Text>Search</Text>
        <Categories list={this.state.categories}></Categories>
        <Suggestions list={this.state.categories}></Suggestions>
      </Home>
    );
  }
}