import React, {Component} from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import { data } from '../mocks/suggestions.json';
import Empty from '../components/shared/empty-list';
import Separator from '../components/shared/separator';
import Suggestion from '../components/suggestion';

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
                    renderItem={this.renderItem}
                >
                </FlatList>
            </Layout>
        );
    }

    renderEmpty = () => <Empty message="No se encontraron sugerencias"></Empty> 
    renderItem = ({item}) => {
        return (
            <Suggestion {...item} key={item.key}></Suggestion>
        )
    }
    itemSeparator = () => <Separator/>
}