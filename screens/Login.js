import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    const storedEmail = await AsyncStorage.getItem('userEmail');
    const storedPassword = await AsyncStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      Alert.alert('Login bem-sucedido!');
      navigation.navigate('Home');
    } else {
      Alert.alert('E-mail ou senha incorretos!');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>Entre em sua conta</Text>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.loginButton}>
          <Button title="Entrar" color="#B83253" onPress={handleLogin} />
        </View>
        <View style={styles.createAcc}>
          <Text>Não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Criar agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff1f1',
  },
  title: {
    fontSize: 24,
    margin: 12,
    color: '#B83253',
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    marginBottom: 0,
    marginHorizontal: 15,
  },
  input: {
    height: 40,
    marginVertical: 8,

    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FB8985',
    color: '#ffffff',
    borderColor: '#FB8985',
  },
  loginButton: {
    marginTop: 5,
    marginBottom: 8,
  },
  createAcc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    color: '#B83253',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default Login;
