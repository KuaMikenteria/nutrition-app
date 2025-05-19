import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();

  // Function to navigate to the RecipeDetails screen
  const navigateToRecipeDetails = () => {
    navigation.navigate('RecipeDetails.tsx' as never);
  };

  return (
    <View style={styles.container}>
      {/* Small Buttons at the Top Right */}
      <View style={styles.topRightContainer}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>NUTRI SOURCE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>NUTRI HEALTH</Text>
        </TouchableOpacity>
      </View>

      {/* Large Recipe Button centered on the screen */}
      <TouchableOpacity style={styles.recipeButton} onPress={navigateToRecipeDetails}>
        <Text style={styles.recipeButtonText}>RECIPE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  topRightContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'column', // Stack buttons vertically
    alignItems: 'flex-end',
  },
  smallButton: {
    backgroundColor: '#FFA500', // Orange color
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10, // Space between buttons
    borderRadius: 5,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeButton: {
    backgroundColor: '#4CAF50', // Green color
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '80%', // Large width
    alignItems: 'center',
    position: 'absolute',
    bottom: 50, // Push it a bit above the bottom of the screen
    left: '10%', // Center it horizontally
  },
  recipeButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
