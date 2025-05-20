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

const Pinangat = () => {
  const navigation = useNavigation();

  // Go back to previous screen
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
        <Text style={styles.title}>
          PINANGAT (The Heart of Bicolano Cuisine)
        </Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/Pinangat.jpg")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Pinangat” by Laing, bicol express, atbp; licensed under CC BY-SA 4.0.
        </Text>

        <Text style={styles.description}>
          Pinangat is another beloved dish from the Bicol region, celebrated for
          its unique blend of flavors and traditional preparation methods. This
          delicacy is made by combining shredded taro leaves with ground meat or
          fish, coconut milk, and a variety of spices, including chili peppers
          for that characteristic Bicolano heat. The mixture is then wrapped in
          whole taro leaves and tied securely before being simmered in more
          coconut milk until tender and flavorful. The slow-cooking process
          allows the ingredients to meld together, resulting in a rich, creamy,
          and slightly spicy dish that is both comforting and satisfying.
        </Text>
        <Text style={styles.description}>
          Pinangat showcases the ingenuity and resourcefulness of Bicolano
          cuisine, using local ingredients to create a dish that is both complex
          in flavor and simple in its natural goodness. Typically served with
          steamed rice, Pinangat remains a staple in Bicolano households and a
          must-try for anyone looking to experience the authentic tastes of the
          Philippines.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - Taro leaves {"\n"}- Ground shrimp or fish {"\n"}- Coconut milk{" "}
          {"\n"}- Bird’s eye chili (siling labuyo){"\n"}- Onion, garlic, and
          ginger
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Mix the ground shrimp or fish with garlic, onion, and ginger.{" "}
          {"\n"}
          2. Wrap small portions of the mixture in taro leaves. {"\n"}
          3. Place the bundles in a pot and pour coconut milk over them. {"\n"}
          4. Add chili peppers and simmer until the taro leaves are tender. 5.
          Serve hot with steamed rice. {"\n"}
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

export default Pinangat;
