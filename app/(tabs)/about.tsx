import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ImageBackground } from 'react-native'; // For background image

export default function AboutScreen() {
  return (
        <ImageBackground
          source={require('../../assets/images/cover-bg.png')} // 🌄 Use your background image here
          style={styles.background}
          resizeMode="cover"
        >
    <View style={styles.container}>
      {/* Large Recipe Button centered on the screen */}
      <Link href="/RecipeDetails" asChild>
        <TouchableOpacity style={styles.recipeButton}>
          <Text style={styles.recipeButtonText}>RECIPE</Text>
        </TouchableOpacity>
      </Link>
    </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '(rgba(0, 0, 0, 0.5))', // Semi-transparent black background
    padding: 20,
  },
  recipeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    left: '10%',
  },
  recipeButtonText: {
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
})
