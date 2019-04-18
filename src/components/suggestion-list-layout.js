import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Colors, FontSize } from '../styles/variables';

export default function SuggestionListLayout(props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    title: {
        color: Colors.gray,
        fontSize: FontSize.defaultFontSize,
        fontWeight: 'bold',
        marginVertical: 6,
        marginLeft: 8
    }
});