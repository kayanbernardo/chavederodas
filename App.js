import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './telas/login'
import Cadastro from './telas/cadastro'
import Home from './telas/home';
import firebase from './database/firebase'
import ServicoCarro from './components/servicos/carroServico'
import ServicoMoto from './components/servicos/motoServico'
import ServicoBike from './components/servicos/bikeServico'
import Agendamento from './components/agendamento/agendamento'
const Stack = createStackNavigator();

function MinhasTelas() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle:{backgroundColor: '#28E5E2'},
        headerTintColor: '#fff',
        headerTitleStyle:{fontWeight:'bold'}}}>
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ title: 'Cadastro' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="ServicoCarro" 
        component={ServicoCarro} 
        options={
          {title: 'Detalhes De Servico'},
          {headerLeft: null} 
        }
      />
        <Stack.Screen 
        name="ServicoMoto" 
        component={ServicoMoto} 
        options={
          {title: 'Detalhes De Servico'},
          {headerLeft: null} 
        }
      />
         <Stack.Screen 
        name="ServicoBike" 
        component={ServicoBike} 
        options={
          {title: 'Detalhes De Servico'},
          {headerLeft: null} 
        }
      />
      
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={
         { title: 'Home' },
         {headerLeft: null} 
       }
      />
        <Stack.Screen 
       name="Agendamento" 
       component={Agendamento} 
       options={
         { title: 'Agendamento' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}
export default function App() {
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <MinhasTelas />
    </NavigationContainer>
  );
}