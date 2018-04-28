/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponent from './HelloComponent';
import LifecycleComponent from "./LifecycleComponent";
//导入类、变量、常量、方法
import EIComponent, {name, age, sum} from './EIComponent';
import PropsTest from "./PropsTest";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Setup extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = ({
            remove: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<HelloComponent name="小明"/>*/}
                {/*<LifecycleComponent/>*/}
                {/*<Text style={{fontSize:20}}>名字：{name}</Text>
                <Text style={{fontSize:20}}>年龄：{age}</Text>
                <Text sytle={{fontSize:20}} onPress={()=>{
                    var result = sum(2,3);
                    this.setState({
                        result:result,
                    })
                }}>2+3={this.state.result}</Text>*/}
                <PropsTest
                    name={22}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
