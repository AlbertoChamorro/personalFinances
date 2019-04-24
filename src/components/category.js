import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Category(props){
    return (
        <View style={style.container}>
            <Text style={style.title}>{props.name}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#123',
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 5
    }
});

export default Category;