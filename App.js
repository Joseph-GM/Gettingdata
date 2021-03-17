/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ Component,useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';
const API_KEY = '1d4f14271441b4eb6d5a5c4ee08c252c'

class App extends Component {

  state = {
    breweryList : null,
    weatherData : null,
  }
  
  componentDidMount() {

/*    Promise.all({
      fetch("https://api.openbrewerydb.org/breweries"),
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=37.5481008&lon=126.8648391&APPID=${API_KEY}&units=metric`)
    })
    .then(({res1, res2}) => Promise.all({res1.json(), res2.json()}))
    .then(({data1, data2}) => {this.setState({
      breweryList : data1,
      weatherData : data2
    });
    console.log(this.state.weatherData);
  }) */
    
    fetch("https://api.openbrewerydb.org/breweries")
      .then(response => {
        return response.json();
      }).then(responseData => {
        this.setState(prevState => ({
          breweryList : prevState.breweryList = responseData
      }));
        console.log(responseData);
    })

   }   


  showBreweryList(jsonList) {
      return (
          <FlatList
            ItemSeparatorComponent= {() => <View style={styles.separator } />}
            data={jsonList}
            keyExtractor={(item, index) => index.toString() }
            renderItem = {({ item }) => {
                return (
                    <View>
                      <Text>{item.statId}</Text>
                      <Text>{item.statNm}</Text>
                      <Text>longitute:{item.lng} latitute:{item.lat}</Text>
                      <Text>{item.addr}</Text>
                    </View>
                );
            }}
            />
      );
    } 
  render(){
    return (
      <View>
        {this.showBreweryList(this.state.breweryList)}
      </View>
    );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
separator: {
    height:1,
    backgroundColor: '#CED0CE',
}
  });


export default App;