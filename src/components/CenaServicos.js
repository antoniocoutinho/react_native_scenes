import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={styles.cena}>
      
        
        <BarraNavegacao voltar nav={this.props.nav} corDeFundo="#19D1C8"/>
        
        <View>
          
          <View style={styles.cabecalho}> 
            <Image source={detalheServicos}/>
            <Text style={styles.txtTitulo}>Nossos Serviços</Text>
          </View>

          <View style={styles.detalheServicos}>
            <Text style={styles.txtdetalheServicos} >Texto texto  texto texto texto texto texto texto texto</Text>
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
    color: '#19D1C8',
    marginTop: 20,
    marginLeft: 25
  },
  detalheServicos: {
    marginTop: 20,
    padding: 20

  },
  txtdetalheServicos: {
    color: '#19D1C8',
    fontSize: 18
  }
});