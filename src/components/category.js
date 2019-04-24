import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, FontSize} from '../styles/variables';

function Category(props){
    console.log(props);
    return (
        <View style={[
                    style.container, 
                    {
                        backgroundColor: props.bg_color
                    }]}>
            <Text style={style.title}>{props.name}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.ligthGray,
        width: 200,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: Colors.white,
        fontSize: FontSize.giantFontSize,
        fontWeight: 'bold',
        paddingHorizontal: 2,
        textShadowColor: Colors.shadow,
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 5
    }
});

export default Category;