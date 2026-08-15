import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../telas/login';
import CadUsuarioScreen from '../telas/cadUsuario';
import HomeScreen from '../telas/home';
import RecSenhaScreen from '../telas/recSenha';
import ItensScreen from '../telas/itens';
import PerfilScreen from '../telas/perfil';

const Navigator = createNativeStackNavigator();

function Stack() {
  return (
    <Navigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

      <Navigator.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />

      <Navigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />

      <Navigator.Screen
        name="Cadastro"
        component={CadUsuarioScreen}
        options={{ title: 'Cadastro de usuário' }}
      />

      <Navigator.Screen
        name="RecSenha"
        component={RecSenhaScreen}
        options={{
          title: 'Recuperação de senha',
          headerStyle: {
            backgroundColor: '#f4df1e',
          },
          headerTintColor: '#ff0000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Navigator.Screen
        name="Itens"
        component={ItensScreen}
        options={{ title: 'Itens' }}
      />

      <Navigator.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: 'Perfil' }}
      />

    </Navigator.Navigator>
  );
}

export default Stack;