// dishes
import BicolExpress from '../(tabs)/recipes/BicolExpress';
import Kinalas from '../(tabs)/recipes/Kinalas';
import Kandingga from '../(tabs)/recipes/Kandingga'; 
import PancitBato from '../(tabs)/recipes/PancitBato'; 
import Kinunot from '../(tabs)/recipes/Kinunot';

// dessertss
import Shakoy from '../(tabs)/recipes/Shakoy';
import TiwiHaloHalo from '../(tabs)/recipes/TiwiHaloHalo';
import PiliNutCandies from '../(tabs)/recipes/PiliNutCandies';
import Gunimis from '../(tabs)/recipes/Gunimis';

// kakanin
import Binutong from '../(tabs)/recipes/Binutong';
import Sinapot from '../(tabs)/recipes/Sinapot';
import TabogTabog from '../(tabs)/recipes/TabogTabog';
import PutoBukayo from '../(tabs)/recipes/PutoBukayo';
import Linubak from '../(tabs)/recipes/Linubak';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Other tabs */}
      <Stack.Screen name="Shakoy" component={Shakoy} />
      <Stack.Screen name="TiwiHaloHalo" component={TiwiHaloHalo} />
      <Stack.Screen name="PiliNutCandies" component={PiliNutCandies} />
      <Stack.Screen name="Gunimis" component={Gunimis} />
      <Stack.Screen name="BicolExpress" component={BicolExpress} />
      <Stack.Screen name="Kinalas" component={Kinalas} />
      <Stack.Screen name="Kandingga" component={Kandingga} />
      <Stack.Screen name="PancitBato" component={PancitBato} />
      <Stack.Screen name="Kinunot" component={Kinunot} />
      <Stack.Screen name="Sinapot" component={Sinapot} />
      <Stack.Screen name="TabogTabog" component={TabogTabog} />
      <Stack.Screen name="Binutong" component={Binutong} />
      <Stack.Screen name="PutoBukayo" component={PutoBukayo} />
      <Stack.Screen name="PutoBukayo" component={PutoBukayo} />
      <Stack.Screen name="Linubak" component={Linubak} />

      {/* Add the rest as needed */}
    </Stack.Navigator>
  );
}
