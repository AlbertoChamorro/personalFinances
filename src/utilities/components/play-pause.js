import React from 'react'
import {Image, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import {Colors} from '../../styles/variables'

export default function PlayPause(props){
    return (
        <TouchableHighlight 
            onPress={props.onPress}
            style={style.container}
            underlayColor={Colors.overlay}
            hitSlop={{
                left: 5, 
                top: 5, 
                bottom: 5, 
                right: 5
            }}
            >

            {
                props.paused
                    ? <Image source={require('../../assets/play.png')} style={style.button}/>
                    : <Image source={require('../../assets/pause.png')} style={style.button}/>
            }

        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    button: {
        width: 28,
        height: 28,
        marginLeft: 4,
        tintColor: Colors.accent,
        resizeMode: 'contain'
    }
})