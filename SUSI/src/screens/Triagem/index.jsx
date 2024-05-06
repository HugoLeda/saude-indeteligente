import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

export default function Triagem() {

  const [description, setDescrription] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Text style={styles.text}>Triagem</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput 
          style={styles.input}
          placeholder='Consultar triagem'
          placeholderTextColor='#808080'
          value={description}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonContent}>+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
