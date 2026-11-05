import { StyleSheet, Text, View } from "react-native";
// Përmbajtja e Ballinës.
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🏠</Text>
      <Text style={styles.title}>Mirë se erdhe!</Text>
      <Text>Ky është ekrani Ballina.</Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0fdfa",
  },
  emoji: { fontSize: 55 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#134e4a",
  },
});
