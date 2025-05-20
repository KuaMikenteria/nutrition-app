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

const SiliIceCream = () => {
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
        <Text style={styles.title}>KINALAS</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/Sili-Ice-Cream.jpg")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Kinalas", licensed under CC BY-NC-ND 2.0
        </Text>

        <Text style={styles.description}>
          Kinalas is a savory Bicolano noodle soup made with a rich broth
          derived from boiled pork or beef bones and meat.
        </Text>
        <Text style={styles.description}>
          It's characterized by its flavorful sauce, tender meat shreds, and the
          addition of toasted garlic and scallions.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - 500g pork or beef bones with some meat attached{"\n"}- 200g pork or
          beef meat, cut into chunks {"\n"}- 1 onion, quartered {"\n"}- 3 cloves
          garlic, crushed {"\n"}- 1 thumb-sized ginger, sliced{"\n"}- Fish sauce
          (patis) to taste {"\n"}- Salt and pepper to taste {"\n"}- Rice noodles{" "}
          {"\n"}- TOPPINGS: {"\n"}- Pork or beef meat, shredded {"\n"}- Toasted
          garlic {"\n"}- Chopped scallions {"\n"}- Hard-boiled eggs, sliced
          (optional) {"\n"}- Siling labuyo vinegar (vinegar infused with bird's
          eye chilies) for dipping (optional)
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. In a large pot, combine the pork or beef bones and meat with onion,
          garlic, and ginger. {"\n"}
          2. Add enough water to cover. {"\n"}
          3. Bring to a boil, then reduce heat and simmer for at least 1-2
          hours, or until the meat is very tender and falling off the bones.{" "}
          {"\n"}
          4. Skim off any scum that rises to the surface. {"\n"}
          5. Remove the meat from the broth and set aside to cool slightly.
          Strain the broth and season with fish sauce, salt, and pepper to
          taste. Keep the broth warm. {"\n"}
          6. Once the meat is cool enough to handle, shred it into small pieces.
          {"\n"}
          7. Cook the rice noodles according to package directions. Drain well.
          {"\n"}
          8. To assemble the Kinalas: Place a serving of noodles in a bowl. Top
          with shredded meat, toasted garlic, and chopped scallions. Pour the
          hot broth over the noodles and meat. {"\n"}
          9. Serve immediately with sliced hard-boiled eggs (if using) and
          siling labuyo vinegar on the side for an extra kick.
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

export default SiliIceCream;
