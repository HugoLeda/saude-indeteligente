import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import Grid from '../../components/Grid';

export default function Paciente() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <Header/>
      <SearchInput 
        placeholder={'Consultar paciente'} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        registerScreen={'CadastroPaciente'}
      />     
      <Grid 
        TitleOne={'Nome'} 
        TitleTwo={'CPF'} 
        searchTerm={searchTerm}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
