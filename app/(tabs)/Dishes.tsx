import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../components/ImageButton';  // Adjust path as needed

export default function Dishes() {
  const navigation = useNavigation();

  const dishes = [
    { label: 'Bicol Express', images: require('../../assets/images/bicol_exp.png'), screen: 'BicolExpress' },
    { label: 'Kinalas', images: require('../../assets/images/kinalas.png'), screen: 'Kinalas' },
    { label: 'Kandingga', images: require('../../assets/images/kandingga.png'), screen: 'Kandingga' },
    { label: 'Pancit Bato', images: require('../../assets/images/pancit_bato.png'), screen: 'PancitBato' },
    { label: 'Kinunot', images: require('../../assets/images/kinunot.png'), screen: 'Kinunot' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {dishes.map(({ label, images, screen }) => (
        <ImageButton
          key={label}
          label={label}
          imageSource={images}
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
