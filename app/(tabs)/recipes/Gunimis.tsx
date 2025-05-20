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

const Gunimis = () => {
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
        <Text style={styles.title}>GUNIMIS</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/gunimis.png")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Gunimis", licensed under CC BY-NC-ND 2.0
        </Text>

        <Text style={styles.description}>
          Gunimis is a refreshing Filipino dessert made with shaved ice, coconut
          milk, pandan-flavored gelatin, and often topped with toasted pinipig
          (pounded young rice).
        </Text>
        <Text style={styles.description}>
          It's a light and fragrant treat, perfect for cooling down.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - 2 cups coconut milk (gata) {"\n"}- 1/4 cup sugar (adjust to taste)
          {"\n"}- 1/4 teaspoon pandan extract{"\n"}- 1 packet (about 25g)
          unflavored gelatin powder{"\n"}- 1/2 cup water{"\n"}- Shaved ice{"\n"}
          - Toasted pinipig (for topping)
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Make the Pandan Gelatin: In a saucepan, combine gelatin powder and
          water. Let it sit for 5-10 minutes to bloom. {"\n"}
          2. Add coconut milk, sugar, and pandan extract to the saucepan. Stir
          well.{"\n"}
          3. Heat the mixture over medium heat, stirring constantly, until the
          gelatin is completely dissolved and the mixture is smooth. Do not
          boil.
          {"\n"}
          4. Pour the mixture into a shallow dish or container and let it cool
          to room temperature, then refrigerate until firm.{"\n"}
          5. Once the gelatin is set, cut it into small cubes or strips.{"\n"}
          6. To assemble the Gunimis: In a glass or bowl, place a generous
          amount of shaved ice.{"\n"}
          7. Arrange the pandan gelatin cubes or strips over the shaved ice.
          {"\n"}
          8. Pour a little more coconut milk over the gelatin and ice (optional,
          you can use evaporated milk as well).{"\n"}
          9. Sprinkle generously with toasted pinipig.{"\n"}
          10. Serve immediately.
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

export default Gunimis;
