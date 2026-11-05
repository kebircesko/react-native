import { StatusBar } from "expo-status-bar"; //eshte per te ndryshuar ngjyra e status bar
import { StyleSheet, View } from "react-native"; //eshte per te krijuar view dhe per te vendosur style
import Header from "./components/Header";//eshte per te importuar komponentin Header
import CourseCard from "./components/CourseCard"; //eshte per te importuar komponentin CourseCard
import StudentCard from "./components/StudentCard"; //eshte per te importuar komponentin StudentCard

export default function App() {
  return (
    <View style={styles.container}>
      {/* Titulli i faqes. */}
      <Header title="Dita 2: Components" />
      {/* Kartela e kursit. */}
      <CourseCard
        title="React Native"
        description="Ndërto aplikacione mobile me komponentë."
      />
      <CourseCard
        title="Detyrë"
        description="Krijo edhe një kartelë për lëndën tënde."
      />
      {/* Kartela e nxënësit. */}
      <StudentCard />
      <StatusBar style="light" />
    </View>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2ff",
    padding: 24,
    paddingTop: 70,
  },
});
