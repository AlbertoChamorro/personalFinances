import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Borders} from '../../styles/variables';

export default function Separator(props){
    switch (props.orientation) {
        case 'top':
            return <View style={[
                styles.borderTop,
                {
                    borderTopColor: setColor(props.color)
                }
            ]}/>
        case 'right':
            return <View style={[
                styles.borderRight,
                {
                    borderRightColor: setColor(props.color)
                }
            ]}/>
        case 'bottom':
            return <View style={[
                styles.borderBottom,
                {
                    borderBottomColor: setColor(props.color)
                }
            ]}/>
        case 'left':
            return <View style={[
                styles.borderLeft,
                {
                    borderLeftColor: setColor(props.color)
                }
            ]}/>
        default:
            return <View style={[
                styles.borderTop,
                {
                    borderTopColor: setColor(props.color)
                }
            ]}/>
    }
}

function setColor(color){
    return (color) ? props.color : Colors.ligthGray
}

const styles = StyleSheet.create({
    borderTop: {
        borderTopWidth: Borders.separator,
        borderTopColor: Colors.ligthGray
    },
    borderRight: {
        borderRightWidth: Borders.separator,
        borderRightColor: Colors.ligthGray
    },
    borderBottom: {
        borderBottomWidth: Borders.separator,
        borderBottomColor: Colors.ligthGray
    },
    borderLeft: {
        borderLeftWidth: Borders.separator,
        borderLeftColor: Colors.ligthGray
    }
});