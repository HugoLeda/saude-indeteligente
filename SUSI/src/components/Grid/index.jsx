import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Grid({ TitleOne, TitleTwo, searchTerm, onRowPress }) {
  const data = [
    {
      nome: 'Joao Hugo Leda',
      cpf: '111.111.111-60',
    },
    {
      nome: 'Maria Heloysa Rodrigues Silva',
      cpf: '111.111.111-60',
    },
    {
      nome: 'Wanessa Gomes de Almeida',
      cpf: '111.111.111-60',
    },
  ];

  const filteredData = data.filter(item => 
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.cpf.includes(searchTerm)
  );

  return (
    <ScrollView style={styles.grid}>
      <View style={styles.header}>
        <Text style={styles.textHeaderOne}>{TitleOne}</Text>
        <Text style={styles.textHeaderTwo}>{TitleTwo}</Text>
      </View>
      {filteredData.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.row} 
          onPress={() => onRowPress(item)}
        >
          <Text style={styles.textColumnOne}>{item.nome}</Text>
          <Text style={styles.textColumnTwo}>{item.cpf}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
