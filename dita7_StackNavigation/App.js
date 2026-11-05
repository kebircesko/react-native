import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";//https://www.mediafire.com/file/lklh1wax1sq0klo/Screenshot_from_2026-10-16_15-46-15.png/file
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
// Krijon navigimin mes ekraneve.
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Stilet e navigimit. */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1d4ed8" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {/* Ekrani fillestar. */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Ballina" }}
        />
        {/* Ekrani i detajeve. */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detajet" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
