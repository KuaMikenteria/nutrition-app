import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageButton from '../components/ImageButton';

export default function Kakanin() {
  const navigation = useNavigation();

  const kakanin = [
    { label: 'Sinapot', images: require('../../assets/images/sinapot.png'), screen: 'Sinapot' },
    { label: 'Tabog-tabog', images: require('../../assets/images/tabog_tabog.png'), screen: 'TabogTabog' },
    { label: 'Binutong', images: require('../../assets/images/binutong.png'), screen: 'Binutong' },
    { label: 'Puto Bukayo', images: require('../../assets/images/puto_bukayo.png'), screen: 'PutoBukayo' },
    { label: 'Linubak', images: require('../../assets/images/linubak.png'), screen: 'Linubak' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {kakanin.map(({ label, images, screen }) => (
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
