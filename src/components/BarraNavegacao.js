import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {

    if  (this.props.voltar ){
      return (        
        <View style={styles.barraTitulo}>
          <TouchableHighlight
            onPress={() => {
              this.props.nav.pop();
            }}
          >
            <Image source={btnVoltar} />
          </TouchableHighlight>
          <Text style={styles.titulo}>ATM Consultoria</Text>
        </View>
      );  
    }

    return (        
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
      flexDirection: 'row',
      backgroundColor: '#CCC',
      padding: 10,
      height: 70
    },
    titulo: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      color: '#000',
      marginTop: 10
    }
 
  })
  