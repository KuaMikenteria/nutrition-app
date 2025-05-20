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

const Sinapot = () => {
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
        <Text style={styles.title}>SINAPOT</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/sinapot.png")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Sinapot", licensed under CC BY-NC-ND 2.0
        </Text>

        <Text style={styles.description}>
          Sinapot is a Bicolano snack made from thinly sliced saba bananas
          coated in a sweet batter and deep-fried until golden brown and crispy.
        </Text>
        <Text style={styles.description}>
          It's similar to banana fritters but typically has a thinner and
          crispier coating.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          3-4 ripe but firm saba bananas, peeled and thinly sliced lengthwise
          {"\n"}1 cup all-purpose flour{"\n"}
          1/2 cup rice flour{"\n"}
          1/4 cup sugar{"\n"}
          1/2 teaspoon baking powder{"\n"}
          Pinch of salt{"\n"}
          About 3/4 cup water (or more, to achieve a thin batter){"\n"}
          Vegetable oil for deep frying
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. In a bowl, whisk together all-purpose flour, rice flour, sugar,
          baking powder, and salt. {"\n"}
          2. Gradually add water, mixing until you get a thin, smooth batter
          that can lightly coat the banana slices. The consistency should be
          similar to a thin pancake batter.{"\n"}
          3. Heat vegetable oil in a deep fryer or a large pan over medium heat.
          The oil should be deep enough to submerge the banana slices.{"\n"}
          4. Dip each banana slice into the batter, ensuring it's evenly coated.
          {"\n"}
          5. Carefully drop the battered banana slices into the hot oil, working
          in batches to avoid overcrowding the pan.{"\n"}
          6. Fry for 2-3 minutes on each side, or until golden brown and crispy.
          {"\n"}
          7. Remove the sinapot from the oil and drain on paper towels to remove
          excess oil.{"\n"}
          8. Serve warm as a snack. You can sprinkle extra sugar on top if
          desired.
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

export default Sinapot;
