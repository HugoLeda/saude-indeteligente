import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes'

import CadastroPaciente from '../screens/CadastroPaciente';


const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabRoutes} options={{ headerShown: false }} />   
      <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} options={{ headerShown: true, title: 'Cadastro de Paciente' }} />      
    </Stack.Navigator>
  );
}