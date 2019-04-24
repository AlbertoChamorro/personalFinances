import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/shared/empty-list';
import Separator from '../components/shared/separator';
import Category from '../components/category';

export default class CategoryList extends Component {

    render(){
        return (
            <Layout title="Categorías">
                <FlatList
                    horizontal
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

    renderEmpty = () => <Empty message="No se encontraron categorías"></Empty>

    renderItem = ({item}) => {
        return (
            <Category {...item} key={item.key}></Category>
        )
    }
    itemSeparator = () => <Separator orientation="right"/>
}