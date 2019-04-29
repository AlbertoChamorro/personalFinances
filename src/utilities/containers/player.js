import React, {Component} from 'react'
import {TouchableHighlight, ActivityIndicator, Image, StyleSheet} from 'react-native'
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

  player = null

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

    setPlayer = ref => {
        this.player = ref
    }

    setFullScreen = () => {
        this.player.presentFullscreenPlayer();
    }

    onProgress = (progress) => {
        console.log(progress)
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
                        ref={this.setPlayer}
                        onProgress={this.onProgress}
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
                        <Text>time left |</Text> */}

                        <TouchableHighlight
                            onPress={this.setFullScreen}
                            underlayColor={Colors.overlay}
                            style={style.touchableFullScreen}
                            hitSlop={{
                                left: 5, 
                                top: 5, 
                                bottom: 5, 
                                right: 5
                            }}>
                            <Image source={require('../../assets/fullscreen.png')} style={style.image}/>
                        </TouchableHighlight>
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
    },
    touchableFullScreen: {
        position: 'absolute',
        right: 4
    },
    image: {
        width: 28,
        height: 28,
        tintColor: Colors.accent,
        resizeMode: 'contain'
    }
})