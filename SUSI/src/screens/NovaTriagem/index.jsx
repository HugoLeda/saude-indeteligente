import { useState } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

export default function NovaTriagem() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <Header height={100}/>      
    </View>
  );
}