import { StyleSheet, Text, View } from "react-native";

export default function StudentCard() {
  // Të dhënat e nxënësit.
  const student = {
    name: "Kebir",
    age: 30,
    course: "React Native",
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Studenti</Text>
      <Text style={styles.text}>Emri: {student.name}</Text>
      <Text style={styles.text}>Mosha: {student.age}</Text>
      <Text style={styles.text}>Kursi: {student.course}</Text>
    </View>
  );
}

// Pamja e elementeve.
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: "#4338ca",
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1b4b",
    marginBottom: 8,
  },
  text: {
    color: "#475569",
    fontSize: 16,
    marginTop: 4,
  },
});
