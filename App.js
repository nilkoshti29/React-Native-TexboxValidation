import React, { Component } from 'react';
import { Text, View, TextInput , StyleSheet, Button } from 'react-native';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      TextInputName: '',
      TextInputEmail: '',
    };
  }
  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.TextInputName != '') {
      //Check for the Name TextInput
      if (this.state.TextInputEmail != '') {
        //Check for the Email TextInput
        alert('Success')
      } else {
        alert('Please Enter Email');
      }
    } else {
      alert('Please Enter Name');
    }
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={TextInputName => this.setState({ TextInputName })}
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
        <View style={{ marginTop: 15 }}>
          <Button
            title="Submit"
            onPress={this.CheckTextInput}
            color="#606070"
          />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 35,
  },
  TextInput: {
    width: '100%',
    height: 40,
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#606070',
  },
});