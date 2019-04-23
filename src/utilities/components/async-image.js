import React, { Component } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';

import { storage } from '../../api/config';

export default class AsyncImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            mounted: true,
            path: null,
            url: null,
            error: false
        };
    }

    componentDidMount() {
        this.setState({ isMounted: true });
        this.getAndLoadHttpUrl();
    }

    async getAndLoadHttpUrl() {
        if (this.state.mounted == true) {
            storage.ref(this.props.path).getDownloadURL()
                .then(data => {
                    this.setState({ url: data })
                    this.setState({ loading: false })
                }).catch(_ => {
                    this.setState({ error: true });
                    this.setState({ loading: false });
                })
        }
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    render() {
        if (this.state.mounted == true) {
            if (this.state.loading == true) {
                return (
                    <View key={this.props.path}>
                        <ActivityIndicator style={{ ...this.props.style, alignSelf: 'center' }}/>
                    </View>
                );
            }

            return (
                <Image style={this.props.style} 
                        source={this.state 
                            ? {uri: this.state.url} 
                            : require('../../assets/placeholder.png')} />
            );
        }
        else {
            return null;
        }
    }
}