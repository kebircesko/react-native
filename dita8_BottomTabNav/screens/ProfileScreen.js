import { StyleSheet, Text, View } from "react-native";
// Përmbajtja e profilit.
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👩‍💻</Text>
      <Text style={styles.title}>Nxënësi</Text>
      <Text>Kursi: React Native</Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  avatar: { fontSize: 60 },
  title: { fontSize: 28, fontWeight: "bold", marginVertical: 12 },
});
