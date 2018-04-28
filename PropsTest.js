/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
//npm install --save prop-types或者yarn add prop-types
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloComponent extends Component {
    //默认属性
    static defaultProps = {
        name: '小红'
    }
    static propTypes = {
        name: PropTypes.string,
    }

    render() {
        this.props
        return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{this.props.name}</Text>
    }
}
