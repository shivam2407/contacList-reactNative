import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Contacts from './contacts'
import {Constants} from 'expo'
import Row from './components/row'

export default class App extends React.Component {
  
  constructor() {
    super()
    
  }

  toggleContact = () => {

  }

  renderRows = () => {
    const temp = Contacts.map((contact) => {
      return <Row {...contact}/>
    })
    return temp.slice(1,50)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button title="Toggle" onPress={this.toggleContact}/>
        {this.renderRows()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  eachRow: {
    padding: 2,
  }
});
