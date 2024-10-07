import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';

export default function TextTriagem({ route }) {
  const { paciente } = route.params;

  const [pressaoArterial, setPressaoArterial] = useState('');
  const [temperaturaCorporal, setTemperaturaCorporal] = useState('');
  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState('');
  const [frequenciaRespiratoria, setFrequenciaRespiratoria] = useState('');
  const [saturacaoOxigenio, setSaturacaoOxigenio] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [relatoPaciente, setRelatoPaciente] = useState('');
  const [imc, setImc] = useState('');

  useEffect(() => {
    if (peso && altura) {
      const alturaEmMetros = altura / 100;
      const calculatedImc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(calculatedImc);
    }
  }, [peso, altura]);

  const handleRelatoChange = (text) => {
    setRelatoPaciente(text);
  };

  return (
    <View style={styles.container}>
      <Header height={100} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Pressão Arterial</Text>
        <TextInput
          style={styles.input}
          value={pressaoArterial}
          onChangeText={setPressaoArterial}
        />

        <Text style={styles.label}>Temperatura Corporal</Text>
        <TextInput
          style={styles.input}
          value={temperaturaCorporal}
          onChangeText={setTemperaturaCorporal}
        />

        <Text style={styles.label}>Frequência Cardíaca</Text>
        <TextInput
          style={styles.input}
          value={frequenciaCardiaca}
          onChangeText={setFrequenciaCardiaca}
        />

        <Text style={styles.label}>Frequência Respiratória</Text>
        <TextInput
          style={styles.input}
          value={frequenciaRespiratoria}
          onChangeText={setFrequenciaRespiratoria}
        />

        <Text style={styles.label}>Saturação de Oxigênio</Text>
        <TextInput
          style={styles.input}
          value={saturacaoOxigenio}
          onChangeText={setSaturacaoOxigenio}
        />

        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Altura (cm)</Text>
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />

        <Text style={styles.label}>IMC</Text>
        <TextInput
          style={styles.input}
          value={imc}
          editable={false}
        />

        <Text style={styles.label}>Relato do Paciente</Text>
        <TextInput
          style={styles.input}
          value={relatoPaciente}
          onChangeText={handleRelatoChange}
          multiline={true}
          numberOfLines={4}
          onSubmitEditing={({ nativeEvent }) => {
            setRelatoPaciente((prev) => prev + '\n' + nativeEvent.text);
          }}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Gravar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#066699',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    minHeight: 40, // Para acomodar melhor o texto
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
