import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import Carousel from 'react-native-banner-carousel'
import CarouselJustForYou from 'react-native-snap-carousel'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const images = [
  "http://images.medicaldaily.com/sites/medicaldaily.com/files/2015/07/11/shutterstock111977636.jpg",
  "https://horizon-magazine.eu/sites/default/files/styles/large/public/field/image/shutterstock_122889364_v2.jpg?itok=oSTFHSjU",
  "http://d2ouvy59p0dg6k.cloudfront.net/img/original/shutterstock_134269931_1.jpg"
];

const categories = [
  'Beverages', 'Foods', 'Cosmetics', 'Charities', 'Electronics', 'Fashions'
]

const searchImage = () => (
  <Image source='./images/search.png' />
)

class RedeemScreen extends Component {

  state = {
    searchVoucher: '',
    items: []
  }

  componentDidMount() {
    fetch('https://fb69ac76.ngrok.io/products')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data
        })
      })
      .catch((error) => {
        console.error(error)
      });
  }

  renderCarousel(image, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
      </View>
    );
  }

  _renderItem({ item, index }) {
    const productDetail = {
      name: item.productName,
      detail: item.productDetail,
      brand: item.productBrand,
      img: item.imgUrl,
      point: item.point,
      rating: item.rating,
      category: item.category,
      claimedVoucher : 'false'
    }
    return (
      <TouchableHighlight style={styles.slide} onPress={() => Actions.productDetail({ productDetail: productDetail })}>
        <View>
          <Image style={{ width: 150, height: 150 }} source={{ uri: item.imgUrl }} />
          <Text style={{marginTop: 10, alignItems: 'center', textAlign: 'center'}}>
            <Text style={styles.point}>{item.point}</Text>
            <Image
              style={{ width: 17, height: 17, marginLeft: 5 }}
              source={require('../images/Point.png')}
            />
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderCategory(category, index) {
    return (
      <View key={index}>
        <Text style={styles.categoryButton}>{category}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />

        <View style={styles.searchBox}>
          <TextInput style={styles.searchText}
            onChangeText={(searchVoucher) => this.setState({ searchVoucher })}
            placeholder=' Search Voucher ...'
            placeholderTextColor='rgba(255, 255, 255, 0.5)' />
        </View>

        <View style={styles.carousel}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
            style={{ height: 10 }}
          >
            {images.map((image, index) => this.renderCarousel(image, index))}
          </Carousel>
        </View>

        <View style={styles.justForYouText}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Just For You</Text>
        </View>

        <View style={{ height: 190 }}>
          <CarouselJustForYou
            ref={(c) => { this._carousel = c; }}
            data={this.state.items}
            renderItem={this._renderItem}
            sliderWidth={BannerWidth}
            itemWidth={150}
          />
        </View>

        <View style={styles.categories}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Categories</Text>
          {categories.map((category, index) => this.renderCategory(category, index))}
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5318D'
  },
  carousel: {
    height: 180
  },
  searchBox: {
    backgroundColor: '#262E46',
    height: 50,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 10
  },
  searchText: {
    fontSize: 14,
    marginTop: 16,
    marginLeft: 15,
    color: 'white'
  },
  justForYouText: {
    width: 250,
    marginTop: 30,
    marginBottom: 10
  },
  slide: {
    height: 150,
    width: 150,
    backgroundColor: 'transparent'
  },
  point: {
    fontSize: 17,
    color: '#F72582',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  categories: {
    width: 250,
    marginBottom: 100
  },
  categoryButton: {
    fontSize: 20,
    marginTop: 10,
    paddingTop: 3,
    borderRadius: 50,
    height: 35,
    width: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F72582',
    color: '#F72582',
    textAlign: 'center',
  }
});

export default RedeemScreen