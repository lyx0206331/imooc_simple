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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/**
 * 方式一:ES6
 * 推荐
 */
export default class LifecycleComponent extends Component {

    constructor(props) {
        super(props);
        console.log('--------constructor--------')
    }

    componentWillMount() {
        console.log('--------componentWillMount--------')
    }

    componentDidMount() {
        console.log('--------componentDidMount--------')
    }

    componentWillReceiveProps(nextProps) {
        console.log('--------componentWillReceiveProps--------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('--------shouldComponentUpdate--------')
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('--------componentWillUpdate--------')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('--------componentDidUpdate--------')
    }

    componentWillUnmount() {
        console.log('--------componentWillUnmount--------')
    }

    render() {
        return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{this.props.name}</Text>
    }
}

/**
 * 方式二：ES5
 */
// var HelloComponent=React.createClass({
//     render(){
//         return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello</Text>
//     }
// })
// module.exports=HelloComponent;

/**
 * 方式三：函数式
 * 无状态，不能使用this
 */
// function HelloComponent(props) {
//     return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{props.name}</Text>
// }
// module.exports=HelloComponent;