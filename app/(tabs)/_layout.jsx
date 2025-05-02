import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const hiddenTabs = [
    'RecipeDetails', // Add all the screens that should hide the tab bar here
    'VegetableStirFry', 
    'VeganTacos',
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      {/* Home Tab - Bottom Tab Navigation visible */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
          tabBarStyle: { display: 'none' }, // Hide the tab bar on the About screen
        }}
      />

      {/* Home Tab - Bottom Tab Navigation visible */}
      <Tabs.Screen
        name="RecipeDetails"
        options={{
          title: 'Recipes',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
          tabBarStyle: { display: 'none' }, // Hide the tab bar on the About screen
        }}
      />

      {/* About Tab - Remove bottom tab bar on this screen */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={24}
            />
          ),
          tabBarStyle: { display: 'none' }, // Hide the tab bar on the About screen
        }}
      />

      {/* Loop through recipes dynamically and apply hiddenTabs logic */}
      {['Laing', 'BicolExpress', 'Pinangat', 'Kandingga', 'Kinunot', 'PiliNutCandies', 'SiliIceCream', 'TiwiHaloHalo'].map((screenName) => (
        <Tabs.Screen
        key={screenName}
        name={`recipes/${screenName}`} // Use dynamic paths
        options={{
          title: screenName.replace(/([A-Z])/g, ' $1'), // Format the name like "Vegetable Stir Fry"
          tabBarStyle: hiddenTabs.includes(screenName) ? { display: 'none' } : {},
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'restaurant' : 'restaurant-outline'}
              color={color}
              size={24}
            />
          ),
          tabBarStyle: { display: 'none' },
        }}
      />
    ))}

        
    </Tabs>
  );
}
