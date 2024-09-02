import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('As senhas devem ser iguais!');
      return;
    }

    await AsyncStorage.setItem('userEmail', email);
    await AsyncStorage.setItem('userPassword', password);

    Alert.alert('Cadastro realizado com sucesso!');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>Crie sua conta</Text>
      <View style={styles.container}>
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
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirmar Senha"
          secureTextEntry={true}
        />
        <View style={styles.signUpButton}>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginLink}>
          <Text>Já possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Entrar agora</Text>
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
    margin: 10,
    color: '#B83253',
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    marginBottom: 0,
    marginHorizontal: 12,    
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
  signUpButton: {
    marginTop: 5,
    marginBottom: 8,
    backgroundColor: '#B83253',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  loginLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    color: '#B83253',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default SignUp;
