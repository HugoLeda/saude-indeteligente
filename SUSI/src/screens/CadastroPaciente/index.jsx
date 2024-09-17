import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import axios from 'axios'; // ou use fetch

export default function CadastroPaciente() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [alergias, setAlergias] = useState('');
  const [medicamentos, setMedicamentos] = useState('');

  const handleGravar = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/cadastro', { // Use o IP correto
        nome,
        dataNascimento,
        sexo,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        telefone,
        alergias,
        medicamentos,
      });

      alert('Dados cadastrados com sucesso!');
    } catch (error) {
      alert(`Erro: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Data de Nascimento" value={dataNascimento} onChangeText={setDataNascimento} />
        <TextInput style={styles.input} placeholder="Sexo" value={sexo} onChangeText={setSexo} />
        <TextInput style={styles.input} placeholder="Logradouro" value={logradouro} onChangeText={setLogradouro} />
        <TextInput style={styles.input} placeholder="Número" value={numero} onChangeText={setNumero} />
        <TextInput style={styles.input} placeholder="Bairro" value={bairro} onChangeText={setBairro} />
        <TextInput style={styles.input} placeholder="Cidade" value={cidade} onChangeText={setCidade} />
        <TextInput style={styles.input} placeholder="Estado" value={estado} onChangeText={setEstado} />
        <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
        <TextInput style={styles.input} placeholder="Alergias" value={alergias} onChangeText={setAlergias} />
        <TextInput style={styles.input} placeholder="Medicamentos" value={medicamentos} onChangeText={setMedicamentos} />
        <TouchableOpacity style={styles.button} onPress={handleGravar}>
          <Text style={styles.buttonText}>Gravar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
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
