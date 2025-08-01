import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [corrente, setCorrente] = useState('');
  const [distancia, setDistancia] = useState('');
  const [bitola110, setBitola110] = useState('');
  const [bitola220, setBitola220] = useState('');

  const calcularBitola = () => {
    const I = parseFloat(corrente);
    const D = parseFloat(distancia);

    if (!isNaN(I) && !isNaN(D)) {
      const resultado110 = (2 * I * D) / 294.64;
      const resultado220 = (2 * I * D) / 510.4;

      setBitola110(resultado110.toFixed(2) + ' mm²');
      setBitola220(resultado220.toFixed(2) + ' mm²');
    } else {
      setBitola110('Valor inválido');
      setBitola220('Valor inválido');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>Calculadora de Bitola</Text>

      <TextInput
        style={styles.input}
        placeholder="Corrente (A)"
        keyboardType="numeric"
        value={corrente}
        onChangeText={setCorrente}
      />

      <TextInput
        style={styles.input}
        placeholder="Distância (m)"
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />

      <Button title="Calcular Bitola" onPress={calcularBitola} />

      <View style={styles.result}>
        <Text style={styles.resultText}>Bitola para 110V: {bitola110}</Text>
        <Text style={styles.resultText}>Bitola para 220V: {bitola220}</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  result: {
    marginTop: 30,
  },
  resultText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#444',
  },
});
