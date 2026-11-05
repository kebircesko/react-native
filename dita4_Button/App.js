import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
export default function App() {
  // Ruan numrin aktual.
  const [count, setCount] = useState(0);
  // Statusi sipas numrit.
  const statusText = count > 0 ? "Pozitiv" : count < 0 ? "Negativ" : "Zero";
  {/*const statusText;
      if (count > 0) {
        statusText = "Pozitiv";
      } 
      else if (count < 0) {
        statusText = "Negativ";
      } 
      else {
        statusText = "Zero";
      } */
    }
  // Ngjyra sipas statusit.
  const statusColor =
    count > 0 ? styles.positive : count < 0 ? styles.negative : styles.zero;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dita 4: Button</Text>
      <Text style={styles.count}>{count}</Text>
      <Text style={[styles.status, statusColor]}>{statusText}</Text>
      {/* Rrit numrin me një. */}
      <Button title="Rrite numrin" onPress={() => setCount(count + 1)} />
      <View style={styles.divider} />
      {/* Zvogëlon numrin me një. */}
      <Button title="Zvogëlo numrin" onPress={() => setCount(count - 1)} />
      {/* Kthen numrin në zero. */}
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Rivendos në zero</Text>
      </Pressable>
      {/* Shton dhjetë. */}
      <Pressable
        style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}
        onPress={() => setCount(count + 10)}
      >
        <Text style={styles.secondaryButtonText}>+10</Text>
      </Pressable>
    </View>
  );{/* Button: kur duhet një buton bazik dhe jo shumë i stilizuar
        Pressable: kur duhet të krijosh buton/custom UI me dizajn dhe efektime */}
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#fff7ed",
  },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center" },
  count: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ea580c",
    marginVertical: 20,
  },
  status: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  positive: {
    color: "#16a34a",
  },
  negative: {
    color: "#dc2626",
  },
  zero: {
    color: "#6b7280",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#d97706",
    marginVertical: 18,
  },
  button: {
    backgroundColor: "#7c2d12",
    padding: 15,
    borderRadius: 10,
    marginTop: 16,
  },
  secondaryButton: {
    backgroundColor: "#f59e0b",
    padding: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  pressed: { opacity: 0.65 },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  secondaryButtonText: {
    color: "#1f2937",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
