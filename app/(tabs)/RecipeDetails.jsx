import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RecipeDetails() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(''); // Add a state to manage category
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  // Define a list of recipes categorized by type
  const recipes = {
    dessert: [
      'Tiwi Halo-halo',
      'Pili Nut Candies',
    ],
    lunch: [
      'Bicol Express',
      'Laing',
    ],
    breakfast: [
      'Kinunot',
      'Kandingga',``
    ],
    dinner: [
      'Kinunot',
      'Pinangat',
      'Kandingga',
    ]
  };

  // Function to navigate back to the previous screen
  const goBackToAbout = () => {
    navigation.goBack();
  };

  // Filter recipes based on search text and selected category
  const filteredRecipes = category
    ? recipes[category]
        .filter((recipe) => recipe.toLowerCase().includes(search.toLowerCase())) // Filter based on category and search
    : Object.values(recipes) // If no category selected, show all recipes
        .flat()
        .filter((recipe) => recipe.toLowerCase().includes(search.toLowerCase())); // Apply search filter across all recipes

  // Function to handle category selection
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory === category ? '' : selectedCategory); // Reset category if same category selected again
    setIsModalVisible(false); // Hide the modal after selection
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow Button */}
      <TouchableOpacity style={styles.backButton} onPress={goBackToAbout}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Recipes"
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#fff"
      />

      {/* Title */}
      <Text style={styles.title}>About Recipes</Text>

      {/* Description */}
      <Text style={styles.description}>
        Explore a variety of delicious vegetable-based recipes! These are perfect for healthy eating and easy meal preparation.
      </Text>

      {/* Select Button */}
      <TouchableOpacity 
        style={styles.selectButton} 
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.selectButtonText}>Select Category</Text>
      </TouchableOpacity>

      {/* Modal for category selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalItem} onPress={() => handleCategorySelect('')}>
              <Text style={styles.modalText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => handleCategorySelect('breakfast')}>
              <Text style={styles.modalText}>Breakfast</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => handleCategorySelect('lunch')}>
              <Text style={styles.modalText}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => handleCategorySelect('dinner')}>
              <Text style={styles.modalText}>Dinner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => handleCategorySelect('dessert')}>
              <Text style={styles.modalText}>Dessert</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Recipe Buttons */}
      <ScrollView contentContainerStyle={styles.recipeList}>
        {filteredRecipes.map((recipe, index) => (
          <TouchableOpacity
            key={index}
            style={styles.recipeButton}
            onPress={() => {
              // Navigate to the specific recipe screen in the recipes folder
              if (recipe === 'Laing') {
                navigation.navigate('recipes/Laing');
              } else if (recipe === 'Bicol Express') {
                navigation.navigate('recipes/BicolExpress');
              } else if (recipe === 'Pinangat') {
                navigation.navigate('recipes/Pinangat');
              } else if (recipe === 'Kandingga') {
                navigation.navigate('recipes/Kandingga');
              } else if (recipe === 'Kinunot') {
                navigation.navigate('recipes/Kinunot');
              } else if (recipe === 'Pili Nut Candies') {
                navigation.navigate('recipes/PiliNutCandies');
              } else if (recipe === 'Tiwi Halo-Halo') {
                navigation.navigate('recipes/TiwiHaloHalo');
              }
            }}
          >
            <Text style={styles.recipeButtonText}>{recipe}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  searchBar: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#fff',
  },
  selectButton: {
    backgroundColor: '#4CAF50', // Green background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    width: '80%',
  },
  modalItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',  // Ensures that buttons are centered
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
  },
  recipeList: {
    alignItems: 'center',
    paddingBottom: 20, // Ensure space at the bottom
  },
  recipeButton: {
    backgroundColor: '#4CAF50', // Green background
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderRadius: 5,
    width: '80%', // Buttons will have a consistent width
  },
  recipeButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
