import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from 'react';

import { styles } from './styles';

export default function SearchInput({placheholder}) {

  const [description, setDescription] = useState('')

  return (
    <View style={styles.containerInput}>
      <TextInput 
          style={styles.input}
          placeholder={placheholder}
          placeholderTextColor='#000'
          value={description}
          onChangeText={text => setDescription(text)}    
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonContent}>+</Text>
      </TouchableOpacity>      
    </View>
  )
}