import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Expo router Link for navigation
import { ImageBackground } from 'react-native'; // For background image

const Index = () => {
  return (
        <ImageBackground
          source={require('../../assets/images/cover-bg.png')} // 🌄 Use your background image here
          style={styles.background}
          resizeMode="cover"
        >
    <View style={styles.container}>
      {/* Large ENTER button */}
      <Link href="/about" style={styles.button}>
        <Text style={styles.buttonText}>ENTER</Text>
      </Link>
    </View>
        </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Center the button towards the bottom
    alignItems: 'center',
    paddingBottom: 50, // Add some space from the bottom
  },
  button: {
    backgroundColor: '#4CAF50', // Green background for the button
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '80%', // Make it a large button
    alignItems: 'center', // Center text inside the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
});

export default Index;
