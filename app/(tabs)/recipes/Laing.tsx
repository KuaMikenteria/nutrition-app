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

const Laing = () => {
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
        <Text style={styles.title}>
          LAING (The Quintessential Bicolano Dish)
        </Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/Laing.jpg")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Laing” by MarvinBikolano, licensed under CC BY-SA 4.0.
        </Text>

        <Text style={styles.description}>
          Laing is a quintessential Bicolano dish that showcases the region’s
          love for coconut milk and chili peppers. This savory dish is made from
          dried taro leaves, slowly simmered in a rich mixture of coconut milk,
          garlic, onions, and a generous amount of chili peppers, giving it a
          distinct spicy kick. Originating from the Bicol region in the
          Philippines, Laing is a testament to the resourcefulness and
          creativity of the Bicolanos, who utilize the abundant taro plants and
          coconuts in their area.
        </Text>
        <Text style={styles.description}>
          The leaves are meticulously prepared, often dried under the sun to
          enhance their flavor before being cooked. The result is a flavorful
          and creamy dish that perfectly balances the heat of the chili with the
          richness of the coconut milk. Laing is typically served with steamed
          rice and is a beloved part of Bicolano’s culinary tradition,
          representing the region’s bold flavors and culinary ingenuity.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - Dried taro leaves {"\n"}- Coconut Milk{"\n"}- Shrimp Paste (Bagoong)
          {"\n"}- Bird’s eye chili (siling labuyo){"\n"}- Pork or dried fish
          (optional)
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Wash and dry the taro leaves thoroughly. {"\n"}
          2. Sauté the garlic, onion, and ginger. {"\n"}
          3. Add the shrimp paste and chili peppers. {"\n"}
          4. Stir in the coconut milk and bring to a boil. {"\n"}
          5. Add the dried taro leaves and simmer until cooked. {"\n"}
          6. Always serve hot with steamed rice. {"\n"}
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

export default Laing;
