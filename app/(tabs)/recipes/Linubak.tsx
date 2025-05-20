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

const Linubak = () => {
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
        <Text style={styles.title}>LINUBAK</Text>

        {/* Picture under the title */}
        <Image
          source={require("../../../assets/images/linubak.png")} // Correct way to load local images
          style={styles.recipeImage}
        />

        {/* Picture Credit */}
        <Text style={styles.pictureCredit}>
          “Bicol Express” by RJ Katthöfer, licensed under CC BY-NC-ND 2.0
        </Text>

        <Text style={styles.description}>
          The name of this dish (Linubak) was derived from the traditional
          method of its preparation. Linubak is a Filipino word and its English
          translation is “to mash” or “to crush”. The traditional Linubak recipe
          requires the use of fresh cassava root.
        </Text>
        <Text style={styles.description}>
          The cassava is peeled, cleaned, and boiled until the texture is soft.
          It is then mashed and the rest of the ingredients are combined and
          mixed, afterwards.
        </Text>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <Text style={styles.ingredients}>
          - 1 lb. grated cassava {"\n"}- 1 cup shredded coconut {"\n"}- 1 can 14
          oz. condensed milk {"\n"}- 3 tablespoons salted butter softened {"\n"}
          - 1/4 teaspoon salt
        </Text>

        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.steps}>
          1. Combine the grated cassava, shredded coconut, condensed milk, salt,
          and butter.{"\n"}
          2. Mix well.{"\n"}
          3. Place the mixture in a pan.{"\n"}
          4. Start to heat the pan and cook the mixture in low to medium heat
          for 20 to 25 minutes.{"\n"}
          5. Gradually stir the mixture while cooking.{"\n"}
          6. Scoop part of a mixture and place it in a mold such as a ramekin or
          small bowl.{"\n"}
          7. Drop the molded mixture in a serving plate lined with cut banana
          leaves and shredded coconut.{"\n"}
          8. Top with butter.{"\n"}
          9. Serve.{"\n"}
          10. Share and enjoy!
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

export default Linubak;
