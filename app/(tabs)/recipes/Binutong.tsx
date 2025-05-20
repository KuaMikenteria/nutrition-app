import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ImageBackground } from "react-native";

type RootStackParamList = {
  RecipeDetails: undefined;
  // add other routes here if needed
};

const Binutong = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Navigate to RecipeDetails screen
  const goBack = () => {
    navigation.goBack(); // Navigate explicitly to RecipeDetails
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
        <Text style={styles.title}>BINUTONG(The Origin)</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/binutong.png")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Binutong”, licensed under CC BY-NC-ND 2.0
        </Text>

        <Text style={styles.description}>
          Binutong is another type of glutinous rice cake from the Bicol region.
        </Text>
        <Text style={styles.description}>
          It's made with glutinous rice cooked in coconut milk, often with a
          sweet filling like sweetened coconut or a piece of salted egg, and
          wrapped in banana leaves.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          2 cups glutinous rice (malagkit) {"\n"}1 1/2 cups coconut milk (gata)
          {"\n"}
          1/4 cup sugar (adjust to taste, especially if adding a sweet filling)
          {"\n"}
          Pinch of salt{"\n"}
          Optional fillings:{"\n"}- Sweetened grated coconut{"\n"}- Small pieces
          of salted egg{"\n"}
          Banana leaves, wilted over heat to make them pliable{"\n"}
          String for tying{"\n"}
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Wash the glutinous rice and soak it in water for at least 2 hours,
          or preferably overnight. {"\n"}
          2. Drain well. {"\n"}
          3. In a bowl, combine the soaked and drained glutinous rice, coconut
          milk, sugar, and salt. {"\n"}
          4. Mix well. {"\n"}
          5. Cut the wilted banana leaves into rectangular pieces. {"\n"}
          6. Place a portion of the glutinous rice mixture onto a banana leaf.
          If using a filling, place a small amount of the filling in the center
          of the rice. {"\n"}
          7. Fold the sides of the banana leaf over the rice, and then fold the
          ends to create a packet. {"\n"}
          8. Tie the packets securely with string. {"\n"}
          9. Arrange the wrapped binutong in a steamer. {"\n"}
          10. Steam for about 45-60 minutes, or until the rice is cooked through
          and tender. {"\n"}
          11. Remove from the steamer and let cool slightly before serving.
          Binutong is often enjoyed as a snack or dessert.
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

export default Binutong;
