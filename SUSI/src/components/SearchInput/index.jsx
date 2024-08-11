import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function SearchInput({ placeholder, searchTerm, setSearchTerm }) {
  return (
    <View style={styles.containerInput}>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#000'
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}    
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonContent}>+</Text>
      </TouchableOpacity>      
    </View>
  );
}
