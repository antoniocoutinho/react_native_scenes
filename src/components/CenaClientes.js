import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={styles.cena}>
        <StatusBar 
          backgroundColor='#ccc'/>
        <BarraNavegacao voltar nav={this.props.nav}  corDeFundo="#B9C941"/>
        <View>
          <View style={styles.cabecalho}> 
            <Image source={detalheClientes}/>
            <Text style={styles.txtTitulo}>Nossos Clientes</Text>
          </View>
          <View style={styles.detalheCliente}>
            <Image source={cliente1}/>
            <Text style={styles.txtdetalheCliente}>Cliente Sys</Text>
          </View >
          <View style={styles.detalheCliente}>
            <Image source={cliente2}/>
            <Text style={styles.txtdetalheCliente}>Cliente Rsm</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cena: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  cabecalho:{
    marginTop: 20,
    flexDirection: 'row',
  },
  txtTitulo:{
    fontSize: 30,
    color: '#B9C941',
    marginTop: 10,
    marginLeft: 25
  },
  detalheCliente:{
    padding: 20,
    marginTop: 10
  },
  txtdetalheCliente:{
    fontSize: 18,
    marginLeft: 15
  }
});