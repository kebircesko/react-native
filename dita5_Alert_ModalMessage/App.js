import { useState } from "react";
import { Alert, Modal, Platform, Pressable, StyleSheet, Text, View } from "react-native";
export default function App() {
  // Dukshmëria e mesazhit dhe konfirmimit.
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const showAlert = () => {
    if (Platform.OS === "web") { // Konfirmimi në web.
      setConfirmVisible(true);
      return;
    }
    // Konfirmimi në telefon.
    Alert.alert("Konfirmim", "A e përfundove detyrën?", [
      { text: "Jo", style: "cancel" },
      { text: "Po", onPress: () => setVisible(true) },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert & Modal</Text>
      {/* Hap konfirmimin. */}
      <Pressable style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Hape mesazhin</Text>
      </Pressable>
      {/* Konfirmimi për web. */}
      <Modal
        visible={confirmVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setConfirmVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Konfirmim</Text>
            <Text>A e përfundove detyrën?</Text>
            <View style={styles.actions}>
              <Pressable style={styles.button} onPress={() => setConfirmVisible(false)}>
                <Text style={styles.buttonText}>Jo</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  // Mbyll konfirmimin, hap mesazhin.
                  setConfirmVisible(false);
                  setVisible(true);
                }}
              >
                <Text style={styles.buttonText}>Po</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* Mesazhi pas konfirmimit. */}
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.emoji}>🎉</Text>
            <Text style={styles.modalTitle}>Shumë mirë!</Text>
            <Text>Detyra u shënua si e përfunduar.</Text>
            {/* Mbyll mesazhin. */}
            <Pressable style={styles.close} onPress={() => setVisible(false)}>
              <Text style={styles.buttonText}>Mbylle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#f0fdf4",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  button: { backgroundColor: "#15803d", padding: 16, borderRadius: 10 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  actions: { flexDirection: "row", gap: 12, marginTop: 22 },
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  modal: {
    backgroundColor: "white",
    padding: 28,
    borderRadius: 18,
    alignItems: "center",
  },
  emoji: { fontSize: 48 },
  modalTitle: { fontSize: 24, fontWeight: "bold", marginVertical: 12 },
  close: {
    alignSelf: "stretch",
    backgroundColor: "#15803d",
    padding: 14,
    borderRadius: 9,
    marginTop: 22,
  },
});
