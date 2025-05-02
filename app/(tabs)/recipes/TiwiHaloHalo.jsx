import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TiwiHaloHalo = () => {
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
      <Text style={styles.title}>TIWI HALO-HALO</Text>
  
      {/* Picture under the title */}
      <Image 
                    source={require('../../../assets/images/recipes/Tiwi-Halo-halo.jpg')} // Correct way to load local images
                    style={styles.recipeImage} 
            />
      
      {/* Picture Credit */}
      <Text style={styles.pictureCredit}>Photo Courtesy: guerlaincanicula</Text>

      <Text style={styles.description}>
      Tiwi Halo-halo is a unique and celebrated version of the classic Filipino dessert, halo-halo, from the town of Tiwi in the Bicol region. This refreshing treat stands out due to its distinctive local ingredients and preparation style. Tiwi Halo-halo features a vibrant mix of shaved ice and evaporated milk combined with a variety of ingredients that highlight the region’s culinary specialties. Common components include sweetened fruits like jackfruit and banana, candied beans, jellies, and tubers, all topped with a generous scoop of leche flan or ice cream.
      </Text>
      <Text style={styles.description}>
      What sets Tiwi Halo-halo apart is the addition of local delicacies, such as pili nuts, which add a rich, nutty flavor and a delightful crunch. The dessert is often garnished with a sprinkle of toasted rice flakes or a drizzle of caramel syrup for added texture and sweetness. Tiwi Halo-halo offers a deliciously cool and satisfying experience, perfectly capturing the essence of Bicol’s diverse and flavorful cuisine.
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

export default TiwiHaloHalo;

