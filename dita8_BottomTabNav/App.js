// npm install @react-navigation/native
// npx expo install @react-native-screens react-native-safe-area-context

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
// Krijon skedat poshtë ekranit.
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Stilet e skedave. */}
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#0f766e" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#0f766e",
          tabBarLabelStyle: { fontSize: 14, paddingBottom: 6 },
          tabBarStyle: { height: 64 },
        }}
      >
        {/* Skeda Ballina. */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Ballina", tabBarLabel: "Ballina" }}
        />
        {/* Skeda Profili. */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profili", tabBarLabel: "Profili" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
