import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

const Kandingga = () => {
  const navigation = useNavigation();

  // Navigate to RecipeDetails screen
  const goBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/cover-bg.png")} // 🌄 Use your background image here
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Recipe Content */}
        <Text style={styles.title}>KANDINGGA (Discovering Kandingga)</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/Kandingga.jpg")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>Photo Courtesy: Ang Sarap</Text>

        {/* Description of the dish */}
        <Text style={styles.description}>
          Kandingga, often referred to as “Bicolano Bopis,” is a traditional
          dish from the Bicol region that exemplifies the area’s inventive use
          of local ingredients and bold flavors. This flavorful and hearty dish
          is made from finely chopped pork lungs, heart, and other offal, which
          are sautéed with garlic, onions, tomatoes, and a medley of spices,
          including the indispensable chili peppers that give it a distinctive
          spicy kick.
        </Text>
        <Text style={styles.description}>
          The offal is simmered until tender and infused with the rich, spicy,
          and slightly tangy flavors of the seasoning. Often garnished with bell
          peppers and served with a splash of vinegar, Kandingga offers a
          delightful contrast of textures and tastes. This dish not only
          highlights the Bicolanos’ penchant for robust, spicy cuisine but also
          their skill in transforming humble ingredients into a delicious and
          satisfying meal. Traditionally served with steamed rice, Kandingga is
          a testament to the vibrant and resourceful culinary traditions of the
          Bicol region.
        </Text>

        {/* Ingredients Section */}
        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - Pork liver and lungs{"\n"}- Vinegar{"\n"}- Bird’s eye chili (siling
          labuyo){"\n"}- Onion, garlic, and ginger
        </Text>

        {/* Steps Section */}
        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Sauté the garlic, onion, and ginger.{"\n"}
          2. Add the minced pork liver and lungs and cook until browned.{"\n"}
          3. Pour in the vinegar and add chili peppers.{"\n"}
          4. Simmer until the meat is fully cooked and the flavors are well
          combined.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
    padding: 20,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  recipeImage: {
    width: "100%", // You can adjust the width and height as needed
    height: 250, // Adjust the height to suit your design
    borderRadius: 10,
    marginBottom: 10, // Space between image and text
  },
  pictureCredit: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  ingredients: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  steps: {
    fontSize: 16,
    color: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default Kandingga;
