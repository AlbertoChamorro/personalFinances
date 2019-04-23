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
        };
    }

    componentDidMount() {
        this.setState({ isMounted: true });
        this.getAndLoadHttpUrl();
    }

    async getAndLoadHttpUrl() {
        if (this.state.mounted == true) {
            const ref = storage.ref(this.props.path);
            ref.getDownloadURL().then(data => {
                this.setState({ url: data })
                this.setState({ loading: false })
            }).catch(error => {
                // load place holder
                // this.setState({ url: "/images/logoblue.jpg" })
                this.setState({ loading: false })
            })
        }
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    render() {
        if (this.state.mounted == true) {
            if (this.state.loading == true) {
                // load placeholder
                return (
                    <View key={this.props.path}
                          style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                        <ActivityIndicator />
                    </View>
                );
            }

            // load path in storage
            return (
                <Image style={this.props.style} source={{uri: this.state.url}} />
            );
        }
        else {
            return null;
        }
    }
}