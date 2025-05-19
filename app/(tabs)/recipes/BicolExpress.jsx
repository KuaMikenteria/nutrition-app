import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BicolExpress = () => {
  const navigation = useNavigation();

  // Navigate to RecipeDetails screen
  const goBack = () => {
    navigation.navigate('RecipeDetails'); // Navigate explicitly to RecipeDetails
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Recipe Content */}
      <Text style={styles.title}>BICOL EXPRESS (The Origin)</Text>

      {/* Picture under the title */}
      <Image 
        source={require('../../../assets/images/Bicol-Express.jpg')} // Correct way to load local images
        style={styles.recipeImage} 
      />
      
      {/* Picture Credit */}
      <Text style={styles.pictureCredit}>“Bicol Express” by RJ Katthöfer, licensed under CC BY-NC-ND 2.0</Text>

      <Text style={styles.description}>
        Bicol Express, a dish synonymous with the Bicol region of the Philippines, 
        has an origin story as rich and flavorful as the dish itself. Named after the train service that 
        runs from Manila to the Bicol region, Bicol Express is believed to have been created by a native Bicolana 
        who wanted to craft a dish that encapsulated the fiery and creamy essence of Bicolano cuisine. The dish, 
        which features pork cooked in coconut milk and generously spiced with chili peppers, perfectly embodies the region’s love for spicy and 
        hearty flavors.      
      </Text>
      <Text style={styles.description}>
      Its creation is often attributed to the late restaurateur Cely Kalaw, who introduced it in her
      Manila restaurant in the 1970s, aiming to bring the taste of Bicol to the capital. Over the
      years, Bicol Express has become a staple in Filipino households, celebrated for its
      comforting heat and creamy texture, and remains a beloved symbol of Bicol’s vibrant
      culinary heritage.
      </Text>

      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      <Text style={styles.ingredients}>
        - Pork Belly{'\n'}
        - Coconut Milk{'\n'}
        - Shrimp Paste (Bagoong){'\n'}
        - Bird’s eye chili (siling labuyo){'\n'}
        - Onion, garlic, and ginger
      </Text>

      <Text style={styles.stepsTitle}>Steps:</Text>
      <Text style={styles.steps}>
        1. Sauté the garlic, onion, and ginger. {'\n'}
        2. Add the pork belly and cook until browned.{'\n'}
        3. Stir in the shrimp paste and chili peppers.{'\n'}
        4. Pour in the coconut milk and simmer until the pork is tender and the sauce is thick.{'\n'}
        5. Serve hot with steamed rice.{'\n'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  recipeImage: {
    width: '100%', // You can adjust the width and height as needed
    height: 250,   // Adjust the height to suit your design
    borderRadius: 10,
    marginBottom: 10, // Space between image and text
  },
  pictureCredit: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  ingredients: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  steps: {
    fontSize: 16,
    color: '#fff',
  },
});

export default BicolExpress;
