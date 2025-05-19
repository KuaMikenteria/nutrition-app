import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Expo router Link for navigation

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Large ENTER button */}
      <Link href="/about" style={styles.button}>
        <Text style={styles.buttonText}>ENTER</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'flex-end', // Center the button towards the bottom
    alignItems: 'center',
    paddingBottom: 50, // Add some space from the bottom
  },
  button: {
    backgroundColor: '#4CAF50', // Green background for the button
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '80%', // Make it a large button
    alignItems: 'center', // Center text inside the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Index;
