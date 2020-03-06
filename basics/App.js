import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}> Edit </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBoxMockBackground} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#808080"
            style={styles.searchBox}
          />
        </View>
        <View style={styles.groupContainer}>
          <TouchableHighlight underlayColor="blue">
            <View style={styles.groupBox} />
          </TouchableHighlight>
          <View style={styles.groupBox} />
          <View style={styles.groupBox} />
          <View style={styles.groupBox} />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.myListText}> My Lists </Text>
          <TouchableHighlight underlayColor="blue">
            <View style={styles.listItem} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="blue">
            <View style={styles.listItem} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="blue">
            <View style={styles.listItem} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="blue">
            <View style={styles.listItem} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="blue">
            <View style={styles.listItem} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor="blue">
            <View style={styles.listItem} />
          </TouchableHighlight>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}> Add List </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F2F7",
    flexDirection: "column",
    alignContent: "flex-end"
  },
  topContainer: {
    flex: 0.075,
    backgroundColor: "#F3F2F7",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10
  },
  searchContainer: {
    flex: 0.075,
    backgroundColor: "#F3F2F7",
    marginHorizontal: 10
  },
  groupContainer: {
    flex: 0.3,
    backgroundColor: "#00000",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10
  },
  listContainer: {
    flex: 0.475,
    backgroundColor: "#F3F2F7",
    flexDirection: "column",
    alignContent: "flex-start",
    marginHorizontal: 10
  },
  bottomContainer: {
    flex: 0.075,
    backgroundColor: "#F3F2F7",
    flexDirection: "row",
    alignItems: "left",
    alignContent: "flex-end",
    marginHorizontal: 10
  },
  editButton: {
    flex: 1,
    textAlign: "end"
  },
  editText: {
    color: "#4291FD",
    fontSize: 20,
    fontWeight: "bold"
  },
  searchBox: {
    textAlign: "left",
    height: 30,
    width: 320,
    borderRadius: 20,
    marginLeft: 18,
    position: "absolute"
  },
  searchBoxMockBackground: {
    backgroundColor: "#E3E3E8",
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    width: 330,
    height: 30
  },
  groupBox: {
    backgroundColor: "#FEFFFF",
    marginHorizontal: 10,
    borderRadius: 7,
    width: 155,
    height: 100
  },
  listItem: {
    backgroundColor: "#FEFFFF",
    marginHorizontal: 10,
    marginVertical: 3,
    width: 330,
    height: 40,
    borderRadius: 7
  },
  myListText: {
    color: "#000000",
    textAlign: "left",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 7,
    marginLeft: 20,
    fontWeight: "bold"
  }
});

/*

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
*/
