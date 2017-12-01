import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View>
      
        <StatusBar 
          backgroundColor='#ccc'/>
        <BarraNavegacao voltar nav={this.props.nav}/>
        
        <View>
          
          <View style={styles.cabecalho}> 
            <Image source={detalheEmpresa}/>
            <Text style={styles.txtTitulo}>A Empresa</Text>
          </View>

          <View style={styles.detalheEmpresa}>
            <Text style={styles.txtDetalheEmpresa} >Texto texto  texto texto texto texto texto texto texto</Text>
          </View>

        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho:{
    marginTop: 20,
    flexDirection: 'row',
  },
  txtTitulo:{
    fontSize: 30,
    color: '#EC7148',
    marginTop: 20,
    marginLeft: 25
  },
  detalheEmpresa: {
    marginTop: 20,
    padding: 20

  },
  txtDetalheEmpresa: {
    color: '#EC7148',
    fontSize: 18
  }
});