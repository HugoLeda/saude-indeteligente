import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes'

import CadastroPaciente from '../screens/CadastroPaciente';
import NovaTriagem from '../screens/NovaTriagem';
import TipoTriagem from '../screens/TipoTriagem';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabRoutes} options={{ headerShown: false }} />   
      <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} options={{ headerShown: true, title: 'Cadastro de Paciente' }} />
      <Stack.Screen name="NovaTriagem" component={NovaTriagem} options={{ headerShown: true, title: 'Triagem - Selecionar Paciente' }} />   
      <Stack.Screen name="TipoTriagem" component={TipoTriagem} options={{ headerShown: true, title: 'Triagem - Selecionar Tipo' }} />   
    </Stack.Navigator>
  );
}