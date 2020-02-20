import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style = { styles.leftContainer }>
        <View style = { styles.firstrow}>
          <View style={  [styles.box, {backgroundColor: '#B4C6A4'} ] }></View>
          <View style={  [styles.box, {backgroundColor: '#B4C6C4'} ] }></View>
          <View style={  [styles.box, {backgroundColor: '#B4C6E4'} ] }></View>
        </View>
        <View style = { styles.middlerow}>
          <UselessTextInput/>
          <Button title = 'Add'/>
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
      </SafeAreaView>
    );
  } 
}

function UselessTextInput() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <TextInput
      style={ [styles.textBox, { height: 40, borderColor: 'pink', borderWidth: 1 } ]}
      onChangeText={text => onChangeText(text)}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'flex-start', 
  },
  middlerow: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  secondrow: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  leftContainer: {
    flex: 0.9, 
  },
  rightContainer: {
    flex: 0.1,
  },
  textBox: {
    flex: 1,
    alignContent: 'center',
    marginTop: 30
  },
});
