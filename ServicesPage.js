import React from 'react';
import { View, Text,ScrollView, Image, StyleSheet } from 'react-native';


const services = [
  { name: 'Haircut', price: 'Rs. 1000', image: require('../src/Image16.png') },
  { name: 'Mehendi', price: 'Rs. 500', image: require('../src/Image1.png') },
  { name: 'Eye Makeup', price: 'Rs. 550', image: require('../src/Image2.png') },
  { name: 'Nikkah Makeup', price: 'Rs. 5000', image: require('../src/Image3.png') },
  { name: 'Mehendi Makeup', price: 'Rs. 8000', image: require('../src/Image4.png') },
  { name: 'Party Makeup', price: 'Rs. 3000', image: require('../src/Image5.png') },
  { name: 'Bridal Makeup', price: 'Rs. 20,000', image: require('../src/Image18.png') },
  { name: 'Cleansing', price: 'Rs. 300', image: require('../src/Image6.png') },
  { name: 'Face Wax', price: 'Rs. 400', image: require('../src/Image7.png') },
  { name: 'Face Mask', price: 'Rs. 800', image: require('../src/Image8.png') },
  { name: 'Face Treatment', price: 'Rs. 1000', image: require('../src/Image9.png') },
  { name: 'Face Bleach', price: 'Rs. 600', image: require('../src/Image10.png') },
  { name: 'Waxing', price: 'Rs. 1500', image: require('../src/Image11.png') },
  { name: 'Manicure', price: 'Rs. 1000', image: require('../src/Image12.png') },
  { name: 'Pedicure', price: 'Rs. 1000', image: require('../src/Image15.png') },
];


const ServicesPage = () => {
  return (
    <ScrollView>
       <View style={styles.headerContainer}>
              <Text style={styles.header}>Services</Text>
              </View>
    <View style={styles.container}>
      {services.map((service, index) => (
        <View key={index} style={styles.serviceContainer}>
          <Image source={service.image} style={styles.serviceImage} />
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.servicePrice}>{service.price}</Text>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

// ...

const styles = StyleSheet.create({
 
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceImage: {
    width: 150,
    height: 150,
    marginRight: 16,
  },
  serviceTextContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    paddingTop:50,
    backgroundColor: "#FF69B4",
    padding : 40,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center',
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 18,
  },
  servicePrice: {
    fontSize: 18,
    fontWeight: 'bold',
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
export default ServicesPage;