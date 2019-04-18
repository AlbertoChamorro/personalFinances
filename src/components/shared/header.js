import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

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
    )
}

const styles = StyleSheet.create({
    androidStatusBar: {
        backgroundColor: '#0D47A1',
    },
    iOSSupportSafeArea: {
        backgroundColor: '#1565C0',
    },
    appBar: {
        backgroundColor: '#1565C0',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    appBarText: {
        marginTop: 6,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    logo: {
        width: 32,
        height: 32,
        tintColor: '#FFFFFF',
        resizeMode: 'contain'
    }
});

export default Header;