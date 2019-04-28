import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/player-layout'

export default class Player extends Component {

  // http://clips.vorwaerts-gmbh.de/VfE_html5.mp4
    render() {
       return( 
            <Layout
                video={
                    <Video source={{ uri: 'http://cbc.co/wp-content/uploads/2016/07/cbc-toma-vida-1.mp4' }}
                        style={style.video}
                        resizeMode="contain"
                    />
                }>
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