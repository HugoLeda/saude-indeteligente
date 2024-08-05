import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import Grid from '../../components/Grid';

export default function CadastroUsuario() {
  return (
    <View>
      <Header/>
      <SearchInput placheholder={'Consultar paciente'} />      
      <Grid TitleOne={'Nome'} TitleTwo={'CPF'}/>
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
