import React from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';
import {Colors, FontSize} from '../styles/variables';

export default function CategoryListLayout(props){
    return (
        <ImageBackground source={require('../assets/cover-bg-03.png')}
                style={styles.bgContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                {props.children}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgContainer: {
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    container: {
        paddingVertical: 6
    },
    title: {
        color: Colors.gray,
        fontSize: FontSize.defaultFontSize,
        fontWeight: 'bold',
        marginVertical: 6,
        marginLeft: -2
    }
});