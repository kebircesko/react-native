import { StatusBar } from "expo-status-bar";//na mundëson me kontrollu Status Bar-in e telefonit — pjesën në krye ku shfaqen ora, bateria, Wi-Fi, sinjali, etj.
/*
View → si div në HTML. Përdoret si container për elementet tjera.
Text → përdoret për me shfaq tekst. Si p, h1, span etj. në HTML.
StyleSheet → përdoret për me kriju/stilizu CSS-in në React Native.
FlatList → përdoret për me shfaq një listë me shumë elemente, p.sh. listë studentësh, produktesh, postimesh etj.
*/
import { FlatList, StyleSheet, Text, View } from "react-native";
import DetyraNxenesve from "./components/DetyraNxenesve";

// Të dhënat e listës.
const students = [
  { id: "1", name: "Arta", course: "React Native" },
  { id: "2", name: "Dreni", course: "JavaScript" },
  { id: "3", name: "Era", course: "UI Design" },
  { id: "4", name: "Luan", course: "React Native" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista e nxënësve</Text>
     

        {/* Kodi i listës së mëparshme ruhet këtu: */}
          <FlatList
            data={students}
            // ID unike për çdo nxënës.
            keyExtractor={(item) => item.id}
            // Kartela për çdo nxënës.
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <Text style={styles.number}>{index + 1}</Text>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.course}>{item.course}</Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}//vendos një ndarës (separator) mes çdo elementi të listës.
          />
      {/* <DetyraNxenesve /> */}

      <StatusBar style="auto" />
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 24,
    paddingTop: 70,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 22,
    color: "#0f172a",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
  },
  number: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#0ea5e9",
    color: "white",
    textAlign: "center",
    lineHeight: 36,
    fontWeight: "bold",
    marginRight: 14,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  course: { color: "#64748b", marginTop: 3 },
  separator: { height: 12 },
});
