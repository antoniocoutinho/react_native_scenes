import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
        <View>
            <Text style={styles.barraTitulo}> ATM Consultoria </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo:{
        backgroundColor: '#CCC',
        padding: 10,
        fontSize: 18,
        height: 60,
        flex: 1
    }
})