import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';

export default function TextTriagem({ paciente }) {  

  const [pressaoArterial, setPressaoArterial] = useState('');
  const [temperaturaCorporal, setTemperaturaCorporal] = useState('');
  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState('');
  const [frequenciaRespiratoria, setFrequenciaRespiratoria] = useState('');
  const [saturacaoOxigenio, setSaturacaoOxigenio] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [queixaPrincipal, setQueixaPrincipal] = useState('');
  const [descricaoSintomas, setDescricaoSintomas] = useState('');
  const [duracaoSintomas, setDuracaoSintomas] = useState('');
  
  useEffect(() => {
    if (peso && altura) {
      const alturaEmMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(imcCalculado);     
      console.log(paciente)      
    } else {
      setImc('');
    }
  }, [peso, altura]);

  return (
    <View style={styles.container}>
      <Header height={100} />
      <ScrollView style={styles.form}>
        <Text style={styles.label}>Paciente: add nome{/*paciente.nome*/}</Text>

        <TextInput
          style={styles.input}
          placeholder="Pressão Arterial"
          value={pressaoArterial}
          onChangeText={setPressaoArterial}
        />
        <TextInput
          style={styles.input}
          placeholder="Temperatura Corporal (°C)"
          value={temperaturaCorporal}
          onChangeText={setTemperaturaCorporal}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Frequência Cardíaca (bpm)"
          value={frequenciaCardiaca}
          onChangeText={setFrequenciaCardiaca}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Frequência Respiratória (rpm)"
          value={frequenciaRespiratoria}
          onChangeText={setFrequenciaRespiratoria}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Saturação de Oxigênio (%)"
          value={saturacaoOxigenio}
          onChangeText={setSaturacaoOxigenio}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.imcInput]}
          placeholder="IMC"
          value={imc}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Queixa Principal"
          value={queixaPrincipal}
          onChangeText={setQueixaPrincipal}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição dos Sintomas"
          value={descricaoSintomas}
          onChangeText={setDescricaoSintomas}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Duração dos Sintomas (dias)"
          value={duracaoSintomas}
          onChangeText={setDuracaoSintomas}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar Triagem</Text>
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
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  imcInput: {
    backgroundColor: '#e6e6e6',
  },
  button: {
    padding: 15,
    backgroundColor: '#066699',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
