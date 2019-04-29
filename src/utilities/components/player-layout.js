import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Colors, FontSize} from '../../styles/variables'

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
            {
                !props.isError && props.controls
            }
            {
                props.isError && 
                <View style={style.error}>
                    <Image source={require('../../assets/sad.png')} style={style.image}/>
                    <Text style={style.message}>Lo sentimos ha ocurrido un error al cargar el video</Text>
                </View>
            }
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
    },
    error: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: Colors.ligthGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 52,
        height: 52,
        tintColor: Colors.darkGray,
        resizeMode: 'contain'
    },
    message: {
        color: Colors.darkGray,
        marginTop: 6,
        fontSize: FontSize.smallerFontSize
    }
})