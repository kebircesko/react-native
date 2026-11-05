import { StyleSheet, Text, View } from "react-native";
import StudentCard from "./components/StudentCard";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dita 6: Props</Text>
      {/* Dërgon props te kartelat. */}
      <StudentCard name="Arta" age={14} active />
      <StudentCard name="Dreni" age={15} active={false} />
      <StudentCard name="Era" age={13} active />
    </View>
    //name dhe age jane props qe i dergojme të dhënat komponentes StudentCard, 
    //kurse active eshte prop boolean qe tregon nese studenti eshte aktiv apo jo
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: "#fdf4ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#701a75",
    marginBottom: 22,
  },
});
