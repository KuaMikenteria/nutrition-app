// components/ImageButton.tsx
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

type Props = {
  label: string;
  imageSource: any;
  onPress: () => void;
};

export default function ImageButton({ label, imageSource, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
