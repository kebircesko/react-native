import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Location from "expo-location";
export default function App() {
  // Ruan motin dhe statusin.
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("Duke kërkuar lokacionin...");
  const loadWeather = async () => {
    try {
      setWeather(null);
      setStatus("Duke kërkuar lokacionin...");
      // Kërkon lejen për lokacion.
      const permission = await Location.requestForegroundPermissionsAsync();
      if (!permission.granted) {
        setStatus("Leja për lokacion nuk u dha.");
        return;
      }
      // Merr koordinatat aktuale.
      const { coords } = await Location.getCurrentPositionAsync({});
      setStatus("Duke marrë motin...");
      // Merr motin nga API.
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,apparent_temperature,wind_speed_10m&timezone=auto`,
      );
      if (!response.ok) throw new Error("Kërkesa dështoi");
      setWeather((await response.json()).current);
    // Shfaq gabimin.
    } catch (error) {
      setStatus(`Gabim: ${error.message}`);
    }
  };
  // Ngarkon motin në hapje.
  useEffect(() => {
    loadWeather();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🌤️</Text>
      <Text style={styles.title}>Moti aktual</Text>
      {/* Shfaq motin ose statusin e ngarkimit. */}
      {weather ? (
        <View style={styles.card}>
          <Text style={styles.temp}>{weather.temperature_2m}°C</Text>
          <Text>Ndjehet si: {weather.apparent_temperature}°C</Text>
          <Text>Era: {weather.wind_speed_10m} km/h</Text>
        </View>
      ) : (
        <>
          <ActivityIndicator size="large" color="#0369a1" />
          <Text style={styles.status}>{status}</Text>
        </>
      )}
      {/* Merr motin përsëri. */}
      <Pressable style={styles.button} onPress={loadWeather}>
        <Text style={styles.buttonText}>Rifresko motin</Text>
      </Pressable>
      <Text style={styles.credit}>Të dhënat: Open-Meteo (pa API key)</Text>
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#e0f2fe",
  },
  icon: { fontSize: 64, textAlign: "center" },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0c4a6e",
    marginVertical: 12,
  },
  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 16,
    alignItems: "center",
    gap: 8,
    marginVertical: 18,
  },
  temp: { fontSize: 56, fontWeight: "bold", color: "#0284c7" },
  status: { textAlign: "center", margin: 18 },
  button: {
    backgroundColor: "#0369a1",
    padding: 15,
    borderRadius: 10,
    marginTop: 16,
  },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  credit: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 12,
    marginTop: 14,
  },
});
