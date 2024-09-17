import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default function TipoTriagem({ paciente }) {
  return (
    <View style={styles.container}>
      <Header height={100} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Capturar Áudio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Inserir Digitalmente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    height: 120,
    backgroundColor: '#066699',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
