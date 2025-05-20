import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // ✅ Use expo-router
import ImageButton from "../components/ImageButton";
import { ImageBackground } from "react-native"; // ✅ Import ImageBackground

export default function Kakanin() {
  const router = useRouter(); // ✅ Replace useNavigation

  const kakanin = [
    {
      label: "Sinapot",
      images: require("../../assets/images/sinapot.png"),
      screen: "Sinapot",
    },
    {
      label: "Tabog-tabog",
      images: require("../../assets/images/tabog_tabog.png"),
      screen: "TabogTabog",
    },
    {
      label: "Binutong",
      images: require("../../assets/images/binutong.png"),
      screen: "Binutong",
    },
    {
      label: "Puto Bukayo",
      images: require("../../assets/images/puto_bukayo.png"),
      screen: "PutoBukayo",
    },
    {
      label: "Linubak",
      images: require("../../assets/images/linubak.png"),
      screen: "Linubak",
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
        {kakanin.map(({ label, images, screen }) => (
          <ImageButton
            key={label}
            label={label}
            imageSource={images}
            onPress={() => router.push(`/recipes/${screen}` as never)} // ✅ Updated routing
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
});
