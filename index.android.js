import React, { Component } from 'react';
import {
  AppRegistry,  


} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'


//import BarraNavegacao from './src/components/BarraNavegacao';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';

export default class react_native_scenes extends Component {
  render() {
    return (
      <Navigator
      initialRoute={{id: 'principal'}}
        renderScene={(route, navigator) =>{
          if (route.id === 'principal'){
            return(<CenaPrincipal nav={navigator}/>);
          }
          if (route.id === 'clientes'){
            return(<CenaClientes nav={navigator}/>);
          }
          if (route.id === 'contatos'){
            return(<CenaContatos nav={navigator}/>);
          }
          if (route.id === 'empresa'){
            return(<CenaEmpresa nav={navigator}/>);
          }
        }}
      />
    );
  }
}
AppRegistry.registerComponent('react_native_scenes', () => react_native_scenes);
