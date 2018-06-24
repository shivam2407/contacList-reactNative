import React from 'react';
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';
import Contacts from './contacts'
import {Constants} from 'expo'
import Row from './components/row'
import ContactList from './container/contactList'

export default class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      showContact: true,
      contacts: this.transferKeytoStr(),
    }
  }

  toggleContact = () => {
    this.setState(prevState => ({
      showContact: !prevState.showContact,
    }));
  }

  transferKeytoStr = () => {
    return Contacts.slice(1,100).map(contact => {
      contact.key = String(contact.key)
      return contact
    })
  }

  sortContact = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort(comparoter)}))
    console.log('sorted')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button title="Toggle" onPress={this.toggleContact}/>
        <Button title="Sort" onPress={this.sortContact}/> 
        {this.state.showContact && (
          <ContactList contacts={this.state.contacts}/>
       )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  eachRow: {
    padding: 2,
  }
});

const comparoter = (a,b) => {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name) {
    return -1
  }
  return 0
}