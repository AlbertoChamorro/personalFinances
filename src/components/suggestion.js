import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors, FontSize } from '../styles/variables';

import AsyncImage from '../utilities/components/async-image';

function Suggestion(props){
    return (
        <View style={styles.container}>
            <View style={styles.containerCover}>
                <AsyncImage path={props.path}
                            style={styles.cover}>
                </AsyncImage>
                <View style={styles.genderContainer}>
                    <Text style={styles.gender}>{props.priority || 'action'}</Text>
                </View>
            </View>
            <View style={styles.containerDetail}>
                <Text style={styles.title}>{props.name || 'tittle'}</Text>
                <Text style={styles.subtitle}>{props.id || 'companyName'}</Text>
                <Text style={styles.rating}>{props.created_at.toDate().toString() || '0K vistas'}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        flex: 1
    },
    containerCover: {
        position: 'relative'
    },
    genderContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        paddingHorizontal: 6,
        paddingVertical: 4
    },
    gender: {
        color: Colors.white,
        fontSize: FontSize.smallerFontSize
    },
    containerDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    cover: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    title: {
        fontWeight: 'bold',
        fontSize: FontSize.giantFontSize,
        color: Colors.gray
    },
    subtitle: {
        fontSize: FontSize.smallerFontSize,
        color: Colors.white,
        backgroundColor: Colors.disabled,
        paddingHorizontal: 6,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: -4
    },
    rating: {
        fontWeight: 'bold',
        fontSize: FontSize.defaultFontSize,
        color: Colors.gray
    }
});

export default Suggestion;