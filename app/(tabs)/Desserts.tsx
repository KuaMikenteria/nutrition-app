import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // ✅ Use expo-router
import ImageButton from "../components/ImageButton";
import { ImageBackground } from "react-native"; // ✅ Import ImageBackground

export default function Desserts() {
  const router = useRouter(); // ✅ Replace useNavigation

  const desserts = [
    {
      label: "Shakoy",
      image: require("../../assets/images/shakoy.png"),
      screen: "Shakoy",
    },
    {
      label: "Halo-halo",
      image: require("../../assets/images/Tiwi-Halo-halo.jpg"),
      screen: "TiwiHaloHalo",
    },
    {
      label: "Pili Nuts Candy",
      image: require("../../assets/images/Pili-Nut-Candies.jpg"),
      screen: "PiliNutCandies",
    },
    {
      label: "Gunimis",
      image: require("../../assets/images/gunimis.png"),
      screen: "Gunimis",
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/cover-bg.png")} // 🌄 Use your background image here
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ padding: 20 }}
      >
        {desserts.map(({ label, image, screen }) => (
          <ImageButton
            key={label}
            label={label}
            imageSource={image}
            onPress={() => router.push(`/recipes/${screen}` as never)} // ✅ Updated routing
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "(rgba(0, 0, 0, 0.5))", // Semi-transparent background
  },
});
