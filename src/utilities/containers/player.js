import React, {Component} from 'react'
import {ActivityIndicator, Text, StyleSheet} from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/player-layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import {Colors} from '../../styles/variables'

export default class Player extends Component {

  // http://clips.vorwaerts-gmbh.de/VfE_html5.mp4

  state = {
    isLoading: true,
    isError: false,
    paused: true
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

    playPauseHandle = () => {
        this.setState({
            paused: !this.state.paused
        })
    }

    onError = () => {
        this.setState({
            isError: true,
            isLoading: false
        })
    }

    render() {
       return( 
            <Layout
                isLoading={this.state.isLoading}
                isError={this.state.isError}
                video={
                    <Video source={{ uri: 'http://cbc.co/wp-content/uploads/2016/07/cbc-toma-vida-1.mp4' }}
                        style={style.video}
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        onError={this.onError}
                        resizeMode="contain"
                        paused={this.state.paused}
                    />
                }
                loader={
                    <ActivityIndicator
                        color={Colors.primary}/>
                }
                controls={
                    <ControlLayout>
                        <PlayPause
                            onPress={this.playPauseHandle}
                            paused={this.state.paused}
                        />
                        {/*<Text>progress bar |</Text>
                        <Text>time left |</Text>
                        <Text>fullscreen |</Text> */}
                    </ControlLayout>
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
    }
})