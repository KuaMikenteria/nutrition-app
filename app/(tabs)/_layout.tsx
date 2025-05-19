import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  // Screens where the tab bar should be hidden
  const hiddenTabs = [
    'recipes/Laing',
    'recipes/BicolExpress',
    'recipes/Pinangat',
    'recipes/Kandingga',
    'recipes/Kinunot',
    'recipes/PiliNutCandies',
    'recipes/SiliIceCream',
    'recipes/TiwiHaloHalo',
    'RecipeDetails',
  ];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        tabBarStyle: hiddenTabs.includes(route.name) ? { display: 'none' } : { backgroundColor: '#25292e' },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="RecipeDetails"
        options={{
          title: 'Recipes',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'restaurant' : 'restaurant-outline'} size={24} color={color} />
          ),
        }}
      />

      {[
        'Laing',
        'BicolExpress',
        'Pinangat',
        'Kandingga',
        'Kinunot',
        'PiliNutCandies',
        'SiliIceCream',
        'TiwiHaloHalo',
      ].map((screenName) => (
        <Tabs.Screen
          key={screenName}
          name={`recipes/${screenName}`}
          options={{
            title: screenName.replace(/([A-Z])/g, ' $1').trim(), // e.g. "BicolExpress" → "Bicol Express"
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'restaurant' : 'restaurant-outline'} size={24} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
