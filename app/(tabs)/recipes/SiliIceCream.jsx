import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SiliIceCream = () => {
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
      <Text style={styles.title}>SILI ICE CREAM</Text>

      {/* Picture under the title */}
      <Image 
                    source={require('../../../assets/images/Sili-Ice-Cream.jpg')} // Correct way to load local images
                    style={styles.recipeImage} 
            />
      
      {/* Picture Credit */}
      <Text style={styles.pictureCredit}>“Bicol Express” by RJ Katthöfer, licensed under CC BY-NC-ND 2.0</Text>

      <Text style={styles.description}>
      Sili Ice Cream is a bold and innovative dessert from the Bicol region, reflecting the area’s adventurous spirit and love for spicy flavors. This unique ice cream flavor incorporates sili (chili peppers) into a creamy, sweet base, creating a surprising yet delightful contrast between the cool, smooth texture of the ice cream and the unexpected kick of heat. The process involves infusing the ice cream mixture with finely chopped or blended chili peppers, which can range from mild to fiery hot, depending on the recipe.    
      </Text>
      <Text style={styles.description}>
      Often, the spiciness is balanced with sweet elements like coconut or vanilla, providing a harmonious blend of flavors. Sili Ice Cream offers a memorable taste experience that challenges traditional dessert norms, showcasing the Bicolanos’ penchant for combining bold spices with classic sweets. It’s not only a treat for adventurous eaters but also a conversation starter, encapsulating the innovative spirit of Filipino cuisine.
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

export default SiliIceCream;
