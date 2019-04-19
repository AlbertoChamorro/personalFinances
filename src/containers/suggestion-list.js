import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import { data } from '../mocks/suggestions.json';
import Empty from '../components/shared/empty-list';
import Separator from '../components/shared/separator';

export default class SuggestionList extends Component {
    render(){
        // const suggestions = [];
        const suggestions = data;
        return (
            <Layout title="Sugerencias para ti">
                <FlatList
                    data={suggestions}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({item}) => <Text key={item.key}>{item.title}</Text>}
                >
                </FlatList>
            </Layout>
        );
    }

    renderEmpty = () => <Empty message="No se encontraron sugerencias"></Empty> 
    itemSeparator = () => <Separator/>
}