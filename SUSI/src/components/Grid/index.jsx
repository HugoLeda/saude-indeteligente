import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export default function Grid({TitleOne, TitleTwo}) {
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

  return (
    <ScrollView style={styles.grid}>
      <View style={styles.header}>
        <Text style={styles.textHeaderOne}>{TitleOne}</Text>
        <Text style={styles.textHeaderTwo}>{TitleTwo}</Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.textColumnOne}>{item.nome}</Text>
          <Text style={styles.textColumnTwo}>{item.cpf}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
