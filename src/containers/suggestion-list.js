import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import Layout from '../components/suggestion-list-layout';

export default class Suggestions extends Component {
    render(){
        const suggestions = [
            {
                title: 'Finanzas personales',
                key: '1'
            },
            {
                title: 'Metas',
                key: '2'
            },
            {
                title: 'Presupuesto',
                key: '3'
            },
            {
                title: '¿Qué hacer?',
                key: '4'
            },
            {
                title: 'Tips',
                key: '5'
            },
            {
                title: 'Red',
                key: '6'
            },
            {
                title: 'Compartido con otros',
                key: '7'
            }
        ];
        return (
            <View>
                <Layout title="Recomendado para ti">
                    <FlatList
                        data={suggestions}
                        renderItem={({item}) => <Text key={item.key}>{item.title}</Text>}
                    >
                    </FlatList>
                </Layout>
            </View>
        );
    }
}