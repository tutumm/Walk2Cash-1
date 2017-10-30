import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux'


class ProductDetail extends Component{
  productDetail = this.props.productDetail
  render(){
    return(
      <View style={styles.container}>
      <Text
        style={styles.welcome}
      >
      <Text>{this.productDetail.name}</Text>
      <Image style={{ width: 150, height: 150 }} source={{ uri: this.productDetail.img }} />
      <Text>{this.productDetail.point}</Text>
      </Text>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171C2F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default ProductDetail