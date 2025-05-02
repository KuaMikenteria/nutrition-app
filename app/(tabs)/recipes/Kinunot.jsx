import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Kinunot = () => {
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
      <Text style={styles.title}>KINUNOT (What Makes Kinunot Unique?)</Text>

      {/* Picture under the title */}
      <Image 
              source={require('../../../assets/images/recipes/Kinunot.jpg')} // Correct way to load local images
              style={styles.recipeImage} 
            />
      
      {/* Picture Credit */}
      <Text style={styles.pictureCredit}>Photo Courtesy: tasteatlas</Text>

      <Text style={styles.description}>
      Kinunot is a distinct and delectable dish from the Bicol region that highlights the area’s love for seafood and coconut milk. This traditional delicacy is typically made with either flaked stingray or shark meat, which is cooked in a rich, creamy coconut milk sauce infused with garlic, onions, ginger, and, of course, chili peppers for that signature Bicolano heat. Malunggay leaves (moringa) are often added towards the end of the cooking process, contributing both flavor and nutritional value to the dish. The name “Kinunot” translates to “shredded” or “flaked,” referring to the preparation of the main ingredient.      
      </Text>
      <Text style={styles.description}>
      The resulting dish is a harmonious blend of creamy, spicy, and slightly sweet flavors, with the tender fish absorbing the aromatic sauce beautifully. Served with steamed rice, Kinunot is a favorite among locals and visitors alike, offering a true taste of Bicol’s culinary heritage. It not only reflects the region’s abundant marine resources but also its skillful use of ingredients to create dishes that are both comforting and full of character.
      </Text>

      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      <Text style={styles.ingredients}>
        - Stingray or shark meat{'\n'}
        - Coconut Milk{'\n'}
        - Malunggay leaves{'\n'}
        - Bird’s eye chili (siling labuyo){'\n'}
        - Onion, garlic, and ginger
      </Text>

      <Text style={styles.stepsTitle}>Steps:</Text>
      <Text style={styles.steps}>
        1. Boil the stingray or shark meat until tender, then flake it. {'\n'}
        2. Sauté the garlic, onion, and ginger.{'\n'}
        3. Add the flaked meat and coconut milk.{'\n'}
        4. Stir in the malunggay leaves and chili peppers.{'\n'}
        5. Simmer until the sauce thickens.{'\n'}
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

export default Kinunot;
