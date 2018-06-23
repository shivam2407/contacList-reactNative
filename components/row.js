import React, {Component} from 'react'
import {StyleSheet, Text, View,} from 'react-native'
import PropTypes from 'prop-types'

export default class Row extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.eachRow}> 
                <Text>{this.props.name}</Text>
                <Text>{this.props.phone}</Text>
            </View>
        )
    }

    static propTypes = {
        name: PropTypes.string,
        phone: PropTypes.string,
    }

}

const styles = StyleSheet.create({
    eachRow: {
        padding: 3,
    }
});