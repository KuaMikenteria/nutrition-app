import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ navigation, route }) => ({
        headerStyle: { backgroundColor: '#25292e' },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        // Hide back button on index (home)
        headerLeft: route.name === 'index' ? undefined : () => (
          <Pressable onPress={() => navigation.goBack()} style={{ paddingHorizontal: 16 }}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </Pressable>
        ),
      })}
    />
  );
}
