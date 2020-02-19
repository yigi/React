import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = { styles.leftContainer }>
        <View style = { styles.firstrow}>
          <View style={  [styles.box, {backgroundColor: '#B4C6A4'} ] }></View>
          <View style={  [styles.box, {backgroundColor: '#B4C6C4'} ] }></View>
          <View style={  [styles.box, {backgroundColor: '#B4C6E4'} ] }></View>
        </View>
        <View style = { styles.secondrow}>
          <View style={  [styles.box, {backgroundColor: '#86AED1'} ] }></View>
          <View style={  [styles.box, {backgroundColor: '#86AED1'} ] }></View>
          <View style={  [styles.box, {backgroundColor: '#86AED1'} ] }></View>
        </View>
        </View>
        <View style = { styles.rightContainer }>
          <View style={  [styles.box, {backgroundColor: 'black'} ] }></View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#DFE3E6',
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  box: {
    flex: 1,
    margin: 2,
    height: 50,
    width:50
  },
  firstrow: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start', 
  },
  secondrow: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  leftContainer: {
    flex: 0.9, 
  },
  rightContainer: {
    flex: 0.1,
  },
});