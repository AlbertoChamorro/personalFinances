import React, {Component} from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/shared/empty-list';
import Separator from '../components/shared/separator';
import Suggestion from '../components/suggestion';

export default class SuggestionList extends Component {

    render(){
        return (
            <Layout title="Sugerencias para ti">
                <FlatList
                    keyExtractor={this.getKey}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                >
                </FlatList>
            </Layout>
        );
    }

    getKey = element => element.id;

    renderEmpty = () => <Empty message="No se encontraron sugerencias"></Empty>

    renderItem = ({item}) => {
        return (
            <Suggestion {...item} key={item.key}></Suggestion>
        )
    }
    itemSeparator = () => <Separator/>
}