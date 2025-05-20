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

const PancitBato = () => {
  const navigation = useNavigation();

  // Navigate back to the previous screen
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
        <Text style={styles.title}>PANCIT BATO</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/pancit_bato.png")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Pancit Bato”, licensed under CC BY-SA 4.0.
        </Text>

        <Text style={styles.description}>
          Pancit Bato is a unique type of stir-fried noodles from Bato,
          Camarines Sur.{" "}
        </Text>
        <Text style={styles.description}>
          It uses thick, dark-colored noodles that are slightly chewy and are
          typically sautéed with shrimp, pork, vegetables like cabbage and
          carrots, and a savory sauce.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - 500g Pancit Bato noodles{"\n"}- 250g shrimp, peeled and deveined
          {"\n"}- 200g pork, thinly sliced{"\n"}- 1 cup sliced cabbage{"\n"}- 1
          cup sliced carrots{"\n"}- 1 onion, sliced{"\n"}- 3 cloves garlic,
          minced{"\n"}- 2 tablespoons soy sauce{"\n"}- 1 tablespoon oyster sauce
          {"\n"}- 1/2 cup shrimp or pork broth (or water){"\n"}- Cooking oil
          {"\n"}- Salt and pepper to taste{"\n"}- Chopped scallions for garnish
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Soak the Pancit Bato noodles in hot water for about 10-15 minutes,
          or until softened but still firm. Drain well. {"\n"}
          2. Heat oil in a large wok or pan over medium heat. Sauté garlic and
          onion until fragrant. Add the sliced pork and cook until lightly
          browned. {"\n"}
          3. Add the shrimp and cook until pink and cooked through. {"\n"}
          4. Push the pork and shrimp to one side of the wok. Add the sliced
          cabbage and carrots and stir-fry until slightly tender-crisp. {"\n"}
          5. Add the soaked and drained noodles to the wok. {"\n"}
          6. In a small bowl, combine soy sauce, oyster sauce, and broth (or
          water). Pour this sauce over the noodles and vegetables. {"\n"}
          7. Stir-fry everything together until the noodles are evenly coated
          with the sauce and heated through. Season with salt and pepper to
          taste. {"\n"}
          8. Garnish with chopped scallions before serving. Serve hot.
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
    height: "100%", // Ensure the background covers the entire screen
  },
});

export default PancitBato;
