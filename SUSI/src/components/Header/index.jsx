import { View, Image } from 'react-native';

import { styles } from './styles';

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <View style={styles.containerHead}>
      <Image
        source={logo}
      />
    </View>
  )
}