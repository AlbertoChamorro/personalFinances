import React, {Component} from 'react'
import {ActivityIndicator, StyleSheet} from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/player-layout'
import {Colors} from '../../styles/variables'

export default class Player extends Component {

  // http://clips.vorwaerts-gmbh.de/VfE_html5.mp4

  state = {
    isLoading: true
  }

   onBuffer = ({isBuffering}) => {
        this.setState({
            isLoading: isBuffering
        })
   }

   onLoad = () => {
        this.setState({
            isLoading: false
        })
    }

    render() {
       return( 
            <Layout
                isLoading={this.state.isLoading}
                video={
                    <Video source={{ uri: 'http://cbc.co/wp-content/uploads/2016/07/cbc-toma-vida-1.mp4' }}
                        style={style.video}
                        onBuffer={this.onBuffer}
                        resizeMode="contain"
                    />
                }
                loader={
                    <ActivityIndicator style={style.indicatorLoading} 
                        color={Colors.primary}/>
                }
                >
            </Layout>
       )
    }
}

const style = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },    
    indicatorLoading: {
    },
})