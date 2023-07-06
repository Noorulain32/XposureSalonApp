import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Home</Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../src/XposureLogo.png')} style={styles.logo} />
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.intro}>
          Xposure Beauty Salon is a premier salon dedicated to providing exceptional beauty services and a luxurious salon experience. 
          We strive to offer our clients the latest trends, professional expertise, and personalized care to enhance their natural beauty and boost their confidence.
          {'\n\n'}
          At Xposure Beauty Salon, we have a team of highly skilled and talented stylists, colorists, and beauty experts who are passionate about their craft and committed to delivering top-quality services.
          Whether you're looking for a trendy haircut, a stunning hair color transformation, a relaxing facial, or a flawless makeup application, our team is dedicated to exceeding your expectations.
          {'\n\n'}
          Our salon features a modern and stylish ambiance, designed to create a welcoming and comfortable environment for our clients.
          We use high-quality products and advanced techniques to ensure outstanding results while prioritizing the health and integrity of your hair and skin.
          {'\n\n'}
          In addition to our extensive range of hair services, we also offer a variety of beauty treatments, including facials, waxing, manicures, pedicures, and more.
          Our goal is to provide a comprehensive beauty experience that addresses all your needs under one roof.
          At Xposure Beauty Salon, we believe in the power of exceptional customer service.
          Our friendly and knowledgeable staff will consult with you, listen to your preferences and concerns, and tailor our services to suit your unique style and requirements.
          {'\n\n'}
          We are committed to creating a positive and enjoyable salon experience that leaves you feeling pampered, rejuvenated, and beautiful.
          Visit Xposure Beauty Salon and indulge in a world of beauty and relaxation. 
          Let our team of experts take care of you, and leave the salon feeling refreshed, confident, and ready to conquer the world.
        </Text>
      </View>
      <View style={styles.Aboutcontainer}>
        <Text style={styles.title}>About Us</Text>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            <Icon name="phone" size={30} color="black" />
          </View>
          <Text style={styles.infoText}>Phone: +92-333-123456</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            <Icon name="envelope" size={30} color="black" />
          </View>
          <Text style={styles.infoText}>Email: xposuresalon@gmail.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
          <Icon name="location-arrow" size={30} color="black" />
        </View>
        <Text style={styles.infoText}>Location: Street # 02 , I-8/1 Islamabad</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="instagram" size={30} color="black" />
        </View>
        <Text style={styles.infoText}>Instagram: @xposurebeautysalon</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="clock-o" size={30} color="black" />
        </View>
        <Text style={styles.infoText}>Opening Hours: Mon-Fri , 9 AM - 6 PM</Text>
      </View>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  Aboutcontainer:{
    padding:20,
    paddingVertical:10,
    backgroundColor:"#D3D3D3",
    flex: 0.75,
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 40,
  },
  title: {
    paddingTop:15,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FF69B4',
    textAlign: 'center',
  },
  intro: {
    fontSize: 18,
    marginBottom: 32,
    color: 'black',
    textAlign: 'auto',
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  infoText: {
    fontSize: 18,
  },
});

export default Home;
