import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Contacts from './contacts'
import {Constants} from 'expo'
import Row from './components/row'

export default class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      showContact: true,
    }
    
  }

  toggleContact = () => {
    this.setState(prevState => ({
      showContact: !this.state.showContact,
    }));
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
        {this.state.showContact && (<ScrollView>
        {this.renderRows()}
        </ScrollView>)}
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
