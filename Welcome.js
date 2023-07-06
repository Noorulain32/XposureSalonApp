import React, { useState } from 'react';
import Signup from './Signup';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
const Welcome = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    // Example: Make an API request to authenticate the user
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the email and password fields
    setEmail('');
    setPassword('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to</Text>
      <Image
         source={require('../src/XposureLogo.png')}
        style={styles.image}
      />
      <Text style={styles.LoginText}>Login to continue</Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Signup')}>
           <Text style={styles.regularText}>Don't have an account? SignUp</Text>
       </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    paddingTop: 200,
    paddingBottom : 0,

    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 15,
    padding: 30,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: 'white',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#FF69B4',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  image: {
    width: 350,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  LoginText: {
    padding: 30,
    fontSize: 30,
    color: '#FF69B4',
    textAlign: 'center',
  },
});

export default Welcome;
