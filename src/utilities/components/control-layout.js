import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Colors} from '../../styles/variables'

export default function ControlLayout(props){
    return (
        <View style={style.container}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 30,
        backgroundColor: Colors.semiOverlay
    }
})