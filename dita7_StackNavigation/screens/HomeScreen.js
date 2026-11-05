import { Pressable, StyleSheet, Text, View } from "react-native";
// Pranon navigimin.
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Navigation</Text>
      <Text style={styles.text}>Ekranet vendosen njëri mbi tjetrin.</Text>
      {/* Hap detajet dhe dërgon mësimin. */}
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Details", { lesson: "React Native Navigation" })
        }
      >
        <Text style={styles.buttonText}>Shiko detajet</Text>
      </Pressable>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#eff6ff",
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#1e3a8a" },
  text: { fontSize: 17, marginVertical: 14 },
  button: { backgroundColor: "#2563eb", padding: 15, borderRadius: 10 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
});
