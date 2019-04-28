import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Player(props){
    return (
        <View style={style.container}>
            <View style={style.containerVideo}>
                {props.video}
            </View>
            <View style={style.overlay}>
                {
                    props.isLoading && props.loader
                }
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        paddingTop: '56.25%'
    },
    containerVideo: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black'
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})