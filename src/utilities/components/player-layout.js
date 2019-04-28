import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Colors} from '../../styles/variables'

export default function PlayerLayout(props){
    return (
        <View style={style.container}>
            <View style={style.containerVideo}>
                {props.video}
            </View>
            {
                props.isLoading &&
                <View style={style.overlay}>
                {
                    props.isLoading && props.loader
                }
                </View>
            }
            {props.controls}
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
        backgroundColor: Colors.black
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: Colors.overlay,
        justifyContent: 'center',
        alignItems: 'center'
    }
})