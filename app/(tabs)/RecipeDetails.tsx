import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ImageBackground } from 'react-native'; // For background image

export default function RecipeDetails() {
  const router = useRouter();

  return (
        <ImageBackground
          source={require('../../assets/images/cover-bg.png')} // 🌄 Use your background image here
          style={styles.background}
          resizeMode="cover"
        >
    <View style={styles.container}>
      <Text style={styles.title}>Select a Bicol Cuisines</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Dishes')}>
        <Text style={styles.buttonText}>Dishes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Desserts')}>
        <Text style={styles.buttonText}>Desserts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Kakanin')}>
        <Text style={styles.buttonText}>Kakanin</Text>
      </TouchableOpacity>
    </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '(rgba(0, 0, 0, 0.5))', // Semi-transparent black background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
});
