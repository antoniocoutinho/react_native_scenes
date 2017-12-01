import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheContato = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
      <View>
        <StatusBar 
          backgroundColor='#ccc'/>
        <BarraNavegacao voltar nav={this.props.nav}/>
        <View>
          <View style={styles.cabecalho}> 
            <Image source={detalheContato}/>
            <Text style={styles.txtTitulo}>Contatos</Text>
          </View>

          <View style={styles.detalheContatos}>
            
            <Text style={styles.txtDetalheContatos} >TEL: (11) 111111111 </Text>
            <Text style={styles.txtDetalheContatos} >CEL: (22) 2222222222</Text>
            <Text style={styles.txtDetalheContatos} >EMAIL: abc@abc.com.br </Text>

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
    color: '#61DB8C',
    marginTop: 20,
    marginLeft: 25
  },
  detalheContatos: {
    marginTop: 20,
    padding: 20

  },
  txtDetalheContatos: {
    color: '#61DB8C',
    fontSize: 18
  }
});