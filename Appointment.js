import React, { useState } from 'react';
import {
    Alert,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';

const Appointment = ({ navigation }) => {
    const [services, setServices] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleAppointment = () => {
        // Perform  logic
        // Example: Make an API request to authenticate the user
        console.log('Enter Services:', services);
        console.log('Enter Date:', date);
        console.log('Enter Time:', time);
        // Reset
        setServices('');
        setDate('');
        setTime('');
        Alert.alert('Booking Confirmed', 'Your appointment has been booked successfully!');
      };

      return (
        <ScrollView style={styles.container}>
             <View style={styles.headerContainer}>
              <Text style={styles.header}>Appointment</Text>
              </View>
          <Image
             source={require('../src/XposureLogo.png')}
            style={styles.image}
          />
           <Text style={styles.headerText}>Add Appointment</Text>
          <TextInput
            style={styles.inputBox}
            value={services}
            onChangeText={setServices}
            placeholder="service name"
          />
          <TextInput
            style={styles.inputBox}
            value={date}
            onChangeText={setDate}
            placeholder="date"
          />
          <TextInput
            style={styles.inputBox}
            value={time}
            onChangeText={setTime}
            placeholder="time"
          />
          <Pressable onPress={handleAppointment} style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Appointment')}>
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
          paddingTop: 10,
          paddingBottom : 20,
          fontSize: 30,
          color: '#FF69B4',
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
          color: 'black',
          textAlign: 'center',
        },
        headerContainer: {
            padding:10,
            backgroundColor: '#FF69B4',
          },
          header: {
            padding:30,
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          },
      });
       export default Appointment;