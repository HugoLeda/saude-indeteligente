import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default function NovaTriagem() {
  const data = [
    { nome: 'Joao Hugo Leda', cpf: '111.111.111-60' },
    { nome: 'Maria Heloysa Rodrigues Silva', cpf: '111.111.111-61' },
    { nome: 'Wanessa Gomes de Almeida', cpf: '111.111.111-62' },
  ];

  const [paciente, setPaciente] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (text) => {
    setPaciente(text);
    if (text) {
      const filtered = data.filter(item => 
        item.nome.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
      setShowOptions(true);
    } else {
      setFilteredData(data);
      setShowOptions(false);
    }
  };

  const handleOptionSelect = (nome) => {
    setPaciente(nome);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <Header height={100} /> 
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Nome, CPF ou cadastro SUS"
          value={paciente}
          onChangeText={handleInputChange}
          onFocus={() => setShowOptions(true)}
        />
        {showOptions && (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.cpf}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionSelect(item.nome)}
              >
                <Text>{item.nome}</Text>
              </TouchableOpacity>
            )}
            style={styles.optionsContainer}
          />
        )}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
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
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',    
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
  button: {
    width: '100%',
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
