import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ Change this
import ImageButton from '../components/ImageButton';
import { ImageBackground } from 'react-native'; // ✅ Import ImageBackground

export default function Dishes() {
  const router = useRouter(); // ✅ Use router instead of useNavigation

  const dishes = [
    { label: 'Bicol Express', images: require('../../assets/images/bicol_exp.png'), screen: 'BicolExpress' },
    { label: 'Kinalas', images: require('../../assets/images/kinalas.png'), screen: 'Kinalas' },
    { label: 'Kandingga', images: require('../../assets/images/kandingga.png'), screen: 'Kandingga' },
    { label: 'Pancit Bato', images: require('../../assets/images/pancit_bato.png'), screen: 'PancitBato' },
    { label: 'Kinunot', images: require('../../assets/images/kinunot.png'), screen: 'Kinunot' },
  ];

  return (
    <ImageBackground
      source={require('../../assets/images/cover-bg.png')} // 🌄 Use your background image here
      style={styles.background}
      resizeMode="cover"
    >

    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {dishes.map(({ label, images, screen }) => (
        <ImageButton
          key={label}
          label={label}
          imageSource={images}
          onPress={() => router.push(`/recipes/${screen}` as never)}
        />
      ))}
    </ScrollView>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '(rgba(0, 0, 0, 0.5))', // Semi-transparent background
  },
});


