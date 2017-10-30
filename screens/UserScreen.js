import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { BarChart } from 'react-native-charts'
import Pie from 'react-native-pie'

onPressLearnMore = () => {

}

class UserScreen extends Component {

  state = {
    view : -1,
    pressStatusDay: 1, 
    pressStatusMonth: 0, 
    pressStatusYear: 0, 
  }

  onPressDay = () => {
    this.setState({
      view : 0,
      pressStatusDay : 1,
      pressStatusMonth : 0,
      pressStatusYear : 0
    
    })
  }
  onPressMonth = () => {
    this.setState({
      view : 1,
      pressStatusDay : 0,
      pressStatusMonth : 1,
      pressStatusYear : 0
      
    })
  }
  onPressYear = () => {
    this.setState({
      view : 2,
      pressStatusDay : 0,
      pressStatusMonth : 0,
      pressStatusYear : 1
      
    })
  }


  showGraph = () =>{
    if(this.state.view==1){
      return (
        <BarChart
        dataSets={[
        { 
          fillColor: '#F5318D', 
          data: [
            { value: 15 },
            { value: 10 },
            { value: 12 },
            { value: 10 },
            { value: 12 },
            { value: 11 },
            { value: 11 },
            { value: 15 },
            { value: 10 },
            { value: 12 },
            { value: 11 },
            { value: 11 },
            { value: 15 },
            { value: 10 },
            { value: 12 },

          ]
        }
      ]}
        graduation={1}
        horizontal={false}
        showGrid={false}
        barSpacing={5}
        style={{
          height: 200,
          margin: 15,
          width: 300
        }}/>
      )
    }else if(this.state.view==2){
      return (
        <BarChart
        dataSets={[
        { 
          fillColor: '#F5318D', 
          data: [
            { value: 15 },
            { value: 10 },
            { value: 12 },
            { value: 11 },
            { value: 15 },
            { value: 10 },
            { value: 12 },
            { value: 11 },
            { value: 15 },
            { value: 12 },
            { value: 11 },
            { value: 15 },

          ]
        }
      ]}
        graduation={1}
        horizontal={false}
        showGrid={false}
        barSpacing={5}
        style={{
          height: 200,
          margin: 15,
          width: 300
        }}/>
      )
    }else{
      return (
       <BarChart
       dataSets={[
       { 
         fillColor: '#F5318D', 
         data: [
           { value: 15 },
           { value: 10 },
           { value: 12 },
           { value: 11 },
           { value: 15 },
           { value: 10 },
           { value: 12 }
         ]
       }
     ]}
       graduation={1}
       horizontal={false}
       showGrid={false}
       barSpacing={5}
       style={{
         height: 200,
         margin: 15,
         width: 300
       }}/>
      )
     }
    

  }

    render() {
        
        return (
            <ScrollView contentContainerStyle = {styles.container}>
                 <Image
                 style={{width: 100, height: 100, borderRadius: 50,marginTop: 30}}
                 source={{uri: 'https://www.tkgourmet.com/v/vspfiles/photos/3-salmonnorway-2.jpg'}}
               /> 
               <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold',margin:15}}>Salmon Norway</Text>
               
               <View style={{flexDirection:'row', flexWrap:'wrap'}}>
               <Button style={styles.buttontab}
               onPress={onPressLearnMore}
               title="Day"
               accessibilityLabel="day"
             />
             <Button style={styles.buttontab}
               onPress={onPressLearnMore}
               title="Month"
               accessibilityLabel="month"
             />
             <Button style={styles.buttontab}
               onPress={onPressLearnMore}
               title="Year"
               accessibilityLabel="year"
             />
               </View>

               <Text style={styles.textstyle}>MY POINTS: {this.props.totalPoint} </Text>

               <View style={{flexDirection:'row', flexWrap:'wrap'}}>

                    <View style={styles.sortGraph}>
                            
                            <Text style={this.state.pressStatusDay ? styles.buttonPress : styles.welcome} onPress={this.onPressDay}>
                                Day</Text>
                            <Text style={this.state.pressStatusMonth ? styles.buttonPress : styles.welcome} onPress={this.onPressMonth}>
                                Month</Text>
                            <Text style={this.state.pressStatusYear ? styles.buttonPress : styles.welcome} onPress={this.onPressYear}>
                                Year</Text>
                    </View>
              </View>
              

             <View>
                {this.showGraph()}
              </View>

              <View>
                <Pie
                  radius={100}
                  innerRadius={86}
                  series={[this.state.currentStepCount*100/8000]}
                  colors={['#F5318D']}
                  backgroundColor='#364060'
                />
                <View style={styles.gauge}>
                  <Text style={styles.gaugeGoal}>Goal: 8000</Text>
                  <Text style={styles.gaugeText}>{this.state.currentStepCount} steps</Text>
                </View>
          </View>
          

         </ScrollView>
        );

    }

}

const styles = StyleSheet.create({
    welcome: {
      borderRadius: 50,
      height: 30,
      width: 80,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#F72582',
      margin: 5,
      color: '#F72582',
      textAlign: 'center',
      textAlignVertical: 'center'
        
    },
    buttonPress: {
      fontSize: 20
        
    },
    
    container: {
      alignItems: 'center',
      backgroundColor: '#171C2F',
    },

    sortGraph: {
      flexDirection: 'row'
    },
    textstyle: {
      fontSize: 15,
      textAlign: 'center',
      margin: 15,
      color: '#F5318D'
    },
  });
  
  export default UserScreen
