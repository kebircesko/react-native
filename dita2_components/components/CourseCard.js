import { StyleSheet, Text, View } from "react-native";
// Pranon titullin dhe përshkrimin.
export default function CourseCard({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    elevation: 2,
  },
  title: { fontSize: 20, 
    fontWeight: "bold", 
    color: "#1e1b4b" 
  },
  text: { color: "#475569", 
    marginTop: 7, 
    lineHeight: 21 
  },
});
