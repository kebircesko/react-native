import { StyleSheet, Text, View } from "react-native";
// Pranon props nga App.
export default function StudentCard({ name, age, active }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>Mosha: {age} vjeç</Text>
      </View>
      {/* Statusi sipas active. */}
      <Text style={[styles.badge, active ? styles.active : styles.inactive]}>
        {active ? "Aktiv" : "Joaktiv"}
      </Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 18,
    borderRadius: 12,
    marginBottom: 13,
  },
  name: { fontSize: 20, fontWeight: "bold" },
  age: { color: "#64748b", marginTop: 4 },
  badge: {
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: "hidden",
  },
  active: { backgroundColor: "#16a34a" },
  inactive: { backgroundColor: "#94a3b8" },
});
