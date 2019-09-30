import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderComp from './HeaderComp';
import ContentComp from './ContentComp';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Header from props...',
      content: 'Content from props...',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <HeaderComp headerProp={this.state.header} headerSecond={'Second Prop'} />
        <ContentComp
          contentTitle={this.state.content}
          contentSecond={'Second Properties'}
        />
        {/* <Text>Hlw</Text> */}
      </View>
    );
  }
}

export default Test;

// class Header extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>{this.props.headerProp}</Text>
//                 <Text>{this.props.headerSecond}</Text>
//             </View>
//         )
//     }
// }

// class Content extends Component {
//     render(){
//         return(
//             <View>
//                 <Text>{this.props.contentProp}</Text>
//                 <Text>{this.props.contentSecond}</Text>
//             </View>
//         )
//     }
// }
