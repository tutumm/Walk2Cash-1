import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { BarChart } from 'react-native-charts'



class UserScreen extends Component {

  state = {
    view : -1
  }

  onPressDay = () => {
    this.setState({
      view : 0,
    
    })
  }
  onPressMonth = () => {
    this.setState({
      view : 1,
      
    })
  }
  onPressYear = () => {
    this.setState({
      view : 2,
      
    })
  }


  showGraph = () =>{
    if (this.state.view==0){
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
    }else if(this.state.view==1){
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
    }
    

  }

    render() {
        
        return (
            <View style = {styles.container}>
                 <Image
                 style={{width: 100, height: 100, borderRadius: 50,marginTop: 30}}
                 source={{uri: 'https://www.tkgourmet.com/v/vspfiles/photos/3-salmonnorway-2.jpg'}}
               /> 
               <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold',margin:15}}>Salmon Norway</Text>

               <View style={{flexDirection:'row', flexWrap:'wrap'}}>
               <Button style={styles.buttontab}
               onPress={this.onPressDay}
               title="Day"
               accessibilityLabel="day"
             />
             <Button style={styles.buttontab}
               onPress={this.onPressMonth}
               title="Month"
               accessibilityLabel="month"
             />
             <Button style={styles.buttontab}
               onPress={this.onPressYear}
               title="Year"
               accessibilityLabel="year"
             />
            </View>

             <View >
                {this.showGraph()}
              </View>
         </View>
        );

    }

}

const styles = StyleSheet.create({
    buttontab: {
        color :"#F5318D"
    },
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#171C2F',
    }
  });
  
  export default UserScreen