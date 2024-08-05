import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CadastroUsuario from '../screens/CadastroUsuario'
import Historico from '../screens/Historico'
import Consulta from '../screens/Consulta'
import Triagem from '../screens/Triagem'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  const tabOptions = {
    tabBarOptions: {
      style: {
        backgroundColor: '#99B9FF', // Change the background color here
      },
      headerShown: false,
    },
  };

  return (
    <Tab.Navigator screenOptions={ ({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#000',
      tabBarStyle: {
        backgroundColor: 'rgba(153, 185, 255, 0.6)',
        height: 60,  
        padding: 0,                        
      }
    }) }>
      <Tab.Screen 
        name="Cadastro"
        component={CadastroUsuario}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user-plus" color={color} size={size}/>,
          tabBarLabel: 'Paciente'
        }}
      />
    
      <Tab.Screen 
        name="Historico"
        component={Historico}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="clock" color={color} size={size}/>,
          tabBarLabel: 'Histórico'
        }}
      />
    
      <Tab.Screen 
        name="Consulta"
        component={Consulta}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="clipboard" color={color} size={size}/>,
          tabBarLabel: 'Consulta'
        }}
      />
    
      <Tab.Screen 
        name="Triagem"
        component={Triagem}
        options={({route}) => ({          
          tabBarIcon: ({ color, size }) => <Feather name="folder" color={color} size={size}/>,
          tabBarLabel: 'Triagem',          
        })}
      />
    </Tab.Navigator>
  )
}