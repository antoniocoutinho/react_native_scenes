import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao';

export default class react_native_scenes extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true}/>
        <BarraNavegacao/>
      </View>
    );
  }
}
AppRegistry.registerComponent('react_native_scenes', () => react_native_scenes);
