import { StyleSheet, Text, View } from "react-native";
// Pranon të dhënat e navigimit.
export default function DetailsScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mësimi i zgjedhur:</Text>
      {/* Shfaq mësimin e zgjedhur. */}
      <Text style={styles.title}>{route.params?.lesson}</Text>
      <Text>Butoni prapa në header na kthen te Ballina.</Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 28 },
  label: { color: "#64748b" },
  title: { fontSize: 25, fontWeight: "bold", marginVertical: 10 },
});
