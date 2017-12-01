import React, { Component } from 'react';
import {
  AppRegistry,  


} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'


//import BarraNavegacao from './src/components/BarraNavegacao';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';

export default class react_native_scenes extends Component {
  render() {
    return (
      <Navigator
      initialRoute={{id: 'a'}}
        renderScene={(route, navigator) =>{
          if (route.id === 'a'){
            return(<CenaPrincipal nav={navigator}/>);
          }
          if (route.id === 'b'){
            return(<CenaClientes nav={navigator}/>);
          }
          if (route.id === 'c'){
            return(<CenaContatos nav={navigator}/>);
          }
        }}
      />
    );
  }
}
AppRegistry.registerComponent('react_native_scenes', () => react_native_scenes);
