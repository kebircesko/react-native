import { useEffect, useRef, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
// Paketa native nuk mbështet planifikimin e njoftimeve në web.
const Notifications = Platform.OS === "web" ? null : require("expo-notifications");
// Shfaq njoftimet kur aplikacioni është hapur.
Notifications?.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
export default function App() {
  // Ruan mesazhin e statusit.
  const [message, setMessage] = useState("Shtype butonin për ta provuar.");
  const webTimer = useRef(null);
  useEffect(() => () => clearTimeout(webTimer.current), []);

  const scheduleNotification = async () => {
    // Në web shfaq një alert, pa thirrur API-të native.
    if (Platform.OS === "web") {
      clearTimeout(webTimer.current);
      setMessage("Alerti do të shfaqet pas 5 sekondash.");
      webTimer.current = setTimeout(() => {
        setMessage("Koha për mësim! 📚 Vazhdo ushtrimet e React Native.");
        window.alert("Koha për mësim! 📚\nVazhdo ushtrimet e React Native.");
      }, 5000);
      return;
    }

    try {
      // Kanali i njoftimeve për Android.
      if (Platform.OS === "android")
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.HIGH,
        });
      // Kërkon lejen për njoftime.
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) {
        setMessage("Leja për njoftime nuk u dha.");
        return;
      }
      // Planifikon njoftimin pas 5 sekondash.
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Koha për mësim! 📚",
          body: "Vazhdo ushtrimet e React Native.",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 5,
          channelId: "default",
        },
      });
      setMessage("Njoftimi do të vijë pas 5 sekondash.");
    } catch (error) {
      setMessage(`Njoftimi nuk u planifikua: ${error.message}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔔</Text>
      <Text style={styles.title}>Local Notification</Text>
      <Text style={styles.message} accessibilityLiveRegion="polite">
        {message}
      </Text>
      {/* Nis planifikimin. */}
      <Pressable style={styles.button} onPress={scheduleNotification}>
        <Text style={styles.buttonText}>Planifiko njoftimin</Text>
      </Pressable>
      <Text style={styles.note}>
        {Platform.OS === "web"
          ? "Në web shfaqet një alert. Mbaje faqen hapur. Për njoftime të sistemit, provoje në telefon."
          : "Provoje në telefon fizik për rezultat më të mirë."}
      </Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#fffbeb",
  },
  icon: { fontSize: 64, textAlign: "center" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 14,
  },
  message: { textAlign: "center", color: "#475569", marginBottom: 24 },
  button: { backgroundColor: "#d97706", padding: 16, borderRadius: 10 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  note: { textAlign: "center", color: "#78716c", marginTop: 18, fontSize: 12 },
});
