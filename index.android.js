import React, { Component } from 'react';
import {
  AppRegistry,  
  View,
  StatusBar,
} from 'react-native';

//import BarraNavegacao from './src/components/BarraNavegacao';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class react_native_scenes extends Component {
  render() {
    return (
      <CenaPrincipal/>
    );
  }
}
AppRegistry.registerComponent('react_native_scenes', () => react_native_scenes);
