import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class ContentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={{fontWeight: 'bold'}}>Title: {this.props.contentTitle}</Text>
                <Text>{this.props.contentSecond}</Text>
                <Text>Object: {this.props.propObject.objectName1}</Text>
                <Text>Object: {this.props.propObject.objectName2}</Text>
                <Text>Object: {this.props.propObject.objectName3}</Text>
            </View>
        );
    }
}

export default ContentComp;

ContentComp.propTypes = {
    contentTitle: PropTypes.string.isRequired,
    contentSecond: PropTypes.object,
    propObject: PropTypes.object
}

ContentComp.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString: "String value...",
    
    propObject: {
       objectName1:"objectValue1",
       objectName2: "objectValue2",
       objectName3: "objectValue3"
    }
 }