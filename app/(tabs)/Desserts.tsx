import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../components/ImageButton';

export default function Desserts() {
  const navigation = useNavigation();

  const desserts = [
    { label: 'Shakoy', image: require('../../assets/images/shakoy.png'), screen: 'Shakoy' },
    { label: 'Halo-halo', image: require('../../assets/images/Tiwi-Halo-halo.jpg'), screen: 'TiwiHaloHalo' },
    { label: 'Pili Nuts Candy', image: require('../../assets/images/Pili-Nut-Candies.jpg'), screen: 'PiliNutCandies' },
    { label: 'Gunimis', image: require('../../assets/images/gunimis.png'), screen: 'Gunimis' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {desserts.map(({ label, image, screen }) => (
        <ImageButton
          key={label}
          label={label}
          imageSource={image}
          onPress={() => navigation.navigate(screen as never)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
});
