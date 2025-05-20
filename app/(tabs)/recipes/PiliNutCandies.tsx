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

const PiliNutCandies = () => {
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
        <Text style={styles.title}>PILI NUT CANDIES</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/Pili-Nut-Candies.jpg")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Pili Nut” by deejaymarlon, licensed under CC BY-NC-ND 2.0.
        </Text>

        <Text style={styles.description}>
          Pili Nut Candies are a quintessential treat from the Bicol region,
          renowned for their rich flavor and unique texture. These candies are
          made from the pili nut, a native Filipino nut known for its buttery
          taste and crunchy texture. The process of making Pili Nut Candies
          involves roasting the nuts to enhance their natural flavor, then
          coating them in a sweet caramel or syrup, which is often flavored with
          ingredients like vanilla or cinnamon. The result is a delightful
          confection that combines the nut’s inherent creaminess with a sweet,
          chewy coating.
        </Text>
        <Text style={styles.description}>
          Pili Nut Candies come in various forms, including bite-sized pieces,
          crunchy brittle, and even creamy toffees. They are not only a popular
          snack but also a cherished gift, often given during special occasions
          and festivals. These candies highlight the Bicolanos’ skill in
          transforming local ingredients into delicious and memorable treats,
          making Pili Nut Candies a beloved symbol of Bicol’s culinary heritage.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - Pork Belly{"\n"}- Coconut Milk{"\n"}- Shrimp Paste (Bagoong){"\n"}-
          Bird’s eye chili (siling labuyo){"\n"}- Onion, garlic, and ginger
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Sauté the garlic, onion, and ginger. {"\n"}
          2. Add the pork belly and cook until browned.{"\n"}
          3. Stir in the shrimp paste and chili peppers.{"\n"}
          4. Pour in the coconut milk and simmer until the pork is tender and
          the sauce is thick.{"\n"}
          5. Serve hot with steamed rice.{"\n"}
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

export default PiliNutCandies;
