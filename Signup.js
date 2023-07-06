import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, Image, View } from 'react-native';

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleSignup = () => {
    // Perform signup logic
    // Example: Make an API request to create a new user
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Gender:', gender);
    console.log('Contact:', contact);
    console.log('Address:', address);

    // Reset the fields
    setFullName('');
    setEmail('');
    setPassword('');
    setGender('');
    setContact('');
    setAddress('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign Up</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../src/XposureLogo.png')} style={styles.image} />
        <Text style={styles.logoText}>Create account</Text>
      </View>
      <TextInput
        style={styles.inputBox}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.inputBox}
        value={gender}
        onChangeText={setGender}
        placeholder="Gender"
      />
      <TextInput
        style={styles.inputBox}
        value={contact}
        onChangeText={setContact}
        placeholder="Contact"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.inputBox}
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />
      <Pressable onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.regularText}>Already have an account? Log in</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding:10,
    backgroundColor: '#FF69B4',
  },
  header: {
    padding:20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF69B4',
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
    marginHorizontal: 100,
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
  regularText: {
    fontSize: 15,
    padding: 30,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
});

export default Signup;
