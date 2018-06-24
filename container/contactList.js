import React, {Component} from 'react'
import {Text, View, SectionList} from 'react-native'
import PropTypes from 'prop-types'
import Row from '../components/row'

export default class ContactList extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SectionList
            renderItem={(obj) => <Row {...(obj.item)} />}
            renderSectionHeader={obj => <Text>{obj.section.title}</Text>}
            sections={[{
              title: 'A',
              data: this.props.contacts,
            }]}/>
        )
    }

    static propTypes = {
        contacts: PropTypes.array,
    }
}