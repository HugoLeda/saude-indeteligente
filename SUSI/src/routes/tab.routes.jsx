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
        backgroundColor: '#007bff', // Change the background color here
      },
      headerShown: false,
    },
  };

  return (
    <Tab.Navigator screenOptions={ ({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#0c12b',
      tabBarStyle: {
        backgroundColor: '#99bff',
        height: 50,        
      }
    }) }>
      <Tab.Screen 
        name="Cadastro"
        component={CadastroUsuario}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user-plus" color={color} size={size}/>,
          tabBarLabel: 'Cadastro'
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