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

const Shakoy = () => {
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
        <Text style={styles.title}>SHAKOY</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/shakoy.png")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Shakoy”, licensed under CC BY-SA 4.0.
        </Text>

        <Text style={styles.description}>
          Shakoy is a unique type of stir-fried noodles from Bato, Camarines
          Sur.
        </Text>
        <Text style={styles.description}>
          It's a simple yet delicious snack or breakfast item with a slightly
          chewy texture and sweet crust.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - 2 cups all-purpose flour {"\n"}- 1/4 cup sugar {"\n"}- 1 teaspoon
          salt {"\n"}- 1 tablespoon instant dry yeast {"\n"}- 3/4 cup warm milk{" "}
          {"\n"}- 1 egg, beaten {"\n"}- 2 tablespoons melted butter or
          shortening, plus more for greasing {"\n"}- Vegetable oil for deep
          frying {"\n"}- Sugar for coating
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. In a large bowl, whisk together flour, sugar, salt, and yeast.{" "}
          {"\n"}
          2. In a separate bowl, combine warm milk and beaten egg. {"\n"}
          3. Pour the wet ingredients into the dry ingredients and mix until a
          shaggy dough forms. {"\n"}
          4. Add the melted butter or shortening and continue to knead the dough
          on a lightly floured surface for 8-10 minutes, or until smooth and
          elastic. {"\n"}
          5. Lightly grease a clean bowl and place the dough inside. Cover with
          plastic wrap and let it rise in a warm place for 1-2 hours, or until
          doubled in size. {"\n"}
          6. Punch down the dough and divide it into small portions (about 2-3
          inches long). {"\n"}
          7. Roll each portion into a rope and then twist or braid it into your
          desired shape. {"\n"}
          8. Place the shaped dough on a lightly greased baking sheet and let it
          rise again for another 30 minutes. {"\n"}
          9. Heat vegetable oil in a deep fryer or a large pot over medium heat.{" "}
          {"\n"}
          10. Carefully fry the shakoy in batches until golden brown on all
          sides. Drain on paper towels. {"\n"}
          11. While still warm, roll the fried shakoy in sugar until evenly
          coated. {"\n"}
          12. Serve warm.
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

export default Shakoy;
