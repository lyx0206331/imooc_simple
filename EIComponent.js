/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

var name = '小明';
var age = '22';
//导出变量或常量
export {name, age};

export default class EIComponent extends Component {
    render() {
        return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.</Text>
    }
}

//导出方法
export function sum(a, b) {
    return a + b;
}
