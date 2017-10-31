import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { Col, Row, Grid } from "react-native-easy-grid"

class ProductCategory extends Component {
  productCategory = this.props.productCategory

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Image
            style={{ width: 414, height: 110 }}
            source={this.productCategory.categoryImage}
          />
        </View>

        <View style={styles.card}>
          <View style={{ marginTop: 20 }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../images/charities/family(1).png')}
            />
            <Text style={styles.charityName}>มูลนิธิเพื่อเด็ก</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.charityDescription}>การอุปการะเด็ก คือการเข้าสู่สายสัมพันธ์แห่งความเอื้ออาทร</Text>
          </View>

          <View style={styles.signUpButton}>
            <Text style={{ color: 'white', marginTop: 3, fontSize: 16, fontWeight: 'bold' }}>บริจาค</Text>
          </View>

        </View>

        <View style={styles.card}>
          <View style={{ marginTop: 20 }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../images/charities/elephant.png')}
            />
            <Text style={styles.charityName}>มูลนิธิเพื่อช้าง</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.charityDescription}>ช่วยเหลือช้างให้มีความเป็นอยู่ที่ดีขึ้นและในที่สุด สามารถ ดำรงพันธุ์และปรับตัวอยู่ในสภาพธรรมชาติ</Text>
          </View>

          <View style={styles.signUpButton}>
            <Text style={{ color: 'white', marginTop: 3, fontSize: 16, fontWeight: 'bold' }}>บริจาค</Text>
          </View>

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#171C2F',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C0F19',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10,
    width: 414,
    marginTop: 20,
  },
  charityName: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10
  },
  charityDescription: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  signUpButton: {
    height: 35,
    width: '30%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F72582',
    backgroundColor: '#F72582',
    alignItems: 'center',
    marginBottom: 20
  },

});

export default ProductCategory