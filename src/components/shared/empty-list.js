import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Colors, FontSize } from '../../styles/variables';

export default function EmptyList(props){
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/sad.png')} 
                    style={styles.image}>
            </Image>
            <Text style={styles.message}>{props.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 16
    },
    image: {
        tintColor: Colors.pink,
        width: 40,
        height: 40
    },
    message: {
        fontSize: FontSize.smallerFontSize,
        color: Colors.pink
    }
});