import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { Col, Row, Grid } from "react-native-easy-grid"

const imageName = {
  image05: require('../images/stars/0.5.png'),
  image1: require('../images/stars/1.png'),
  image15: '../images/stars/1.5.png',
  image2: '../images/stars/2.png',
  image25: '../images/stars/2.5.png',
  image3: '../images/stars/3.png',
  image35: '../images/stars/3.5.png',
  image4: '../images/stars/4.png',
  image45: require('../images/stars/4.5.png'),
  image5: '../images/stars/5.png'
}

class ProductDetail extends Component {
  productDetail = this.props.productDetail

  componentDidMount() {

    console.log(imageName['image' + '45'])
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 230, marginTop: 30, alignItems: 'flex-start' }}>
          <Grid>
            <Col style={{ alignItems: 'center' }}>
              <Image style={{ width: 150, height: 150 }} source={{ uri: this.productDetail.img }} />
            </Col>
            <Col>
              <Text style={styles.productBrand}>
                {this.productDetail.brand}
              </Text>
              <Text style={styles.productName}>
                {this.productDetail.name}
              </Text>
              <Text style={styles.productCategory}>
                {this.productDetail.category}
              </Text>
              <Text style={styles.productRating}>
                Ratings({this.productDetail.rating})
              </Text>
              <Image
                  style={{ width: 124, height: 17, marginLeft: -10, marginTop: 10 }}
                  source={this.getImage}
                />
            </Col>
          </Grid>
          <Grid style={{marginTop: 100}}>
            <Col>
              <Text style={{ marginTop: 13, alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                <Text style={styles.productPoint}>{this.productDetail.point}</Text>
                <Image
                  style={{ width: 17, height: 17, marginLeft: 5 }}
                  source={require('../images/Point.png')}
                />
              </Text>
            </Col>
            <Col>
              <View style={styles.signUpButton}>
                <Text style={{ textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, color: 'white', marginTop: 3 }}>Claim</Text>
              </View>
            </Col>
          </Grid>
        </View>

        <View style={styles.detail}>
          <Text style={styles.productDetailHead}>รายละเอียด</Text>
          <Text style={styles.productDetail}>{this.productDetail.detail}</Text>
        </View>
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
  productImg: {
    alignItems: 'center'
  },
  productName: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
  },
  productBrand: {
    fontSize: 17,
    color: 'white',
  },
  productCategory: {
    paddingTop: 10,
    fontSize: 17,
    color: '#F72582',
    opacity: 0.8
  },
  productRating: {
    fontSize: 17,
    color: 'white',
    marginTop: 10
  },
  productPoint: {
    fontSize: 17,
    color: '#F72582',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  detail: {
    width: '75%',
  },
  productDetail: {
    color: 'white',
    fontSize: 15,
    opacity: 0.9
  },
  productDetailHead: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 15
  },
  signUpButton: {
    height: 35,
    width: '80%',
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#F72582',
    borderColor: '#F72582'
  },


});

export default ProductDetail