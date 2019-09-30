import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HeaderComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text>{this.props.headerProp}</Text>
                <Text>{this.props.headerSecond}</Text>
            </View>
        );
    }
}

export default HeaderComp;
