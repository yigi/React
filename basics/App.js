import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = { styles.firstrow}>
          <View style={  [styles.box, {backgroundColor: 'darkred'} ] }></View>
          <View style={  [styles.box, {backgroundColor: 'yellow'} ] }></View>
          <View style={  [styles.box, {backgroundColor: 'green'} ] }></View>
        </View>
        <View style = { styles.secondrow}>
          <View style={  [styles.box, {backgroundColor: 'darkred'} ] }></View>
          <View style={  [styles.box, {backgroundColor: 'yellow'} ] }></View>
          <View style={  [styles.box, {backgroundColor: 'green'} ] }></View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'gray',
  },
  box: {
    flex: 0.33,
    margin: 20,
  },
  firstrow: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  secondrow: {
    flex: 1,
    flexDirection: 'rcolumn',
    margin: 10,
    backgroundColor: 'black'
  },
});