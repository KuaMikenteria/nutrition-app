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

const TabogTabog = () => {
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
        <Text style={styles.title}>TABOG_TABOG</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/tabog_tabog.png")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Tabog-tabog", licensed under CC BY-NC-ND 2.0
        </Text>

        <Text style={styles.description}>
          Tabog-tabog is a unique Bicolano delicacy from Tiwi, Albay. It's a
          chewy, glutinous rice cake cooked in coconut milk and wrapped in
          banana leaves.
        </Text>
        <Text style={styles.description}>
          It has a slightly sweet and savory flavor and a distinct aroma from
          the banana leaves.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - 2 cups glutinous rice flour{"\n"}- 1 cup thick coconut milk (kakang
          gata){"\n"}- 1/2 cup sugar (adjust to taste){"\n"}- 1/4 teaspoon salt
          {"\n"}- Banana leaves, wilted over heat to make them pliable{"\n"}-
          String or toothpicks for securing
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. In a bowl, combine glutinous rice flour, sugar, and salt.{"\n"}
          2. Gradually add the thick coconut milk, mixing well.{"\n"}
          3. Continue mixing until a smooth, thick batter forms.{"\n"}
          4. Cut the wilted banana leaves into rectangular pieces, large enough
          to hold a portion of the batter.{"\n"}
          5. Spoon about 2-3 tablespoons of the batter onto a banana leaf. Fold
          the sides of the leaf over the batter, and then fold the ends to
          create a packet. You can secure the ends with string or toothpicks.
          {"\n"}
          6. Arrange the wrapped tabog-tabog in a steamer.{"\n"}
          7. Steam for about 30-40 minutes, or until the rice cake is cooked
          through and has a slightly translucent appearance.{"\n"}
          8. Remove from the steamer and let cool slightly before serving.
          Tabog-tabog is best enjoyed warm.
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

export default TabogTabog;
