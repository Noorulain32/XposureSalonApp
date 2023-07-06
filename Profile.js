import React from 'react';
import { View, Text,button,Pressable,Alert, StyleSheet, ScrollView } from 'react-native';

const Profile = () => {
    const handleLogout = () => {
        Alert.alert('Loged Out!');
    };
  return (
    <ScrollView>
    <View style={styles.headerContainer}>
    <Text style={styles.header}>Profile Info</Text>
    </View>
       <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Noor ul ain</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>Noor3@gmail..com</Text>
      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>21</Text>
      <Text style={styles.label}>Password:</Text>
      <Text style={styles.value}>211234</Text>
      <Text style={styles.label}>Gender</Text>
      <Text style={styles.value}>Female</Text>
      <Text style={styles.label}>Contact:</Text>
      <Text style={styles.value}>09384377447</Text>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>street # 05 , house full , Islamabad</Text>
      <Pressable onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Log out</Text>
            </Pressable>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 40,
    backgroundColor: 'white',
    marginBottom: 16,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
  },
  headerContainer: {
    padding: 10,
    backgroundColor: '#FF69B4',
  },
  header: {
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default Profile;
