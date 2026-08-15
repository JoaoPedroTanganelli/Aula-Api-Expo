import { View,Text, Pressable } from "react-native";
import { Button } from '@react-navigation/elements';
import { Link } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
function Login() {

const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
       <Button screen="Home">Acessar o App</Button>
        <Link screen="Cadastro">Cadatro de usuario</Link>
        <Pressable onPress={() => navigation.navigate('RecSenha')}>
          <Text>Recuperação de senha </Text>
        </Pressable>
    </View>
  );
}

export default Login;