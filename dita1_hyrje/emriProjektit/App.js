import { StatusBar } from "expo-status-bar";//ky eshte per te shfaqet status bar ne ekran
import { Button, StyleSheet, Text, TextInput, View } from "react-native"; //ky eshte per te shfaqet butonat, text, input etj ne ekran

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.schoolName}>
        Shkolla Digjitale Prizren
        </Text>
      <Text style={styles.title}>
        My Profile
      </Text>
      <Text style={styles.name}>
        Kebir Çesko
      </Text>
      <Text style={styles.name}>
        Programmer & Instructor
      </Text>
      {/* Fusha për mesazh. */}
      <TextInput
        style={styles.input}
        placeholder="Shkruaj një mesazh"
      />
      {/* Shfaq përshëndetjen. */}
      <Button
        title="Say Hello"
        onPress={() => alert('Hello React Native!')}
      />

      <StatusBar style="auto" />
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b043b",
    alignItems: "center",
    justifyContent: "center",
  },
  schoolName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  name: {
    fontSize: 18,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    color: "#fff",
  },
});
