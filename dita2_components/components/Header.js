import { StyleSheet, Text, View } from "react-native";
// Pranon titullin nga prindi.
export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4338ca",
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
  },
  title: { color: "white", 
    fontSize: 25, 
    fontWeight: "bold" 
  },
});
