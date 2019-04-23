import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Colors} from '../../styles/variables';

function Header(props){
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor={styles.androidStatusBar.backgroundColor} />
            <SafeAreaView style={styles.iOSSupportSafeArea}>
                <View style={styles.appBar}>
                    <Image source={require('../../assets/peace.png')}
                            style={styles.logo}/>

                    <View style={styles.appBarText}>
                        {props.children}
                    </View>
                </View>
             </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    androidStatusBar: {
        backgroundColor: Colors.secundary,
    },
    iOSSupportSafeArea: {
        backgroundColor: Colors.primary,
    },
    appBar: {
        backgroundColor: Colors.primary,
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    appBarText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        marginTop: 6,
    },
    logo: {
        width: 32,
        height: 32,
        tintColor: Colors.accent,
        resizeMode: 'contain'
    }
});

export default Header;