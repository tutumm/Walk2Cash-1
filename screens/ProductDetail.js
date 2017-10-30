import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux'


class ProductDetail extends Component {
  productDetail = this.props.productDetail
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.productName}>{this.productDetail.name}</Text>
          <Image style={{ width: 150, height: 150 }} source={{ uri: this.productDetail.img }} />
          <Text>{this.productDetail.point}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#171C2F',
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
  
});

export default ProductDetail