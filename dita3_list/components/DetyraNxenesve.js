import { FlatList, StyleSheet, Text, View } from "react-native";

// Nxënësit dhe notat.
const nxenesit = [
  { id: "1", emri: "Arta", kursi: "React Native", qyteti: "Prishtinë", mosha: 17, nota: 5 },
  { id: "2", emri: "Dreni", kursi: "JavaScript", qyteti: "Pejë", mosha: 18, nota: 3 },
  { id: "3", emri: "Era", kursi: "UI Design", qyteti: "Prizren", mosha: 17, nota: 4 },
  { id: "4", emri: "Luan", kursi: "React Native", qyteti: "Gjilan", mosha: 19, nota: 5 },
  { id: "5", emri: "Rina", kursi: "JavaScript", qyteti: "Ferizaj", mosha: 18, nota: 4 },
  { id: "6", emri: "Bledi", kursi: "UI Design", qyteti: "Gjakovë", mosha: 17, nota: 2 },
];

export default function DetyraNxenesve() {
  /*
    data → Të dhënat që shfaqen në listë.
    keyExtractor → I cakton një ID unike secilit element.
    showsVerticalScrollIndicator → Tregon ose fsheh shiritin e scroll-it.
    contentContainerStyle → Stilizon përmbajtjen e listës.
    renderItem → Përcakton si shfaqet secili element.
    item → Elementi aktual i listës.
    index → Pozita/numri rendor i elementit.
    */
  return (
    <FlatList
      data={nxenesit}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.lista}
      renderItem={({ item, index }) => {
        // Kontrollon notën.
        const eshteShkelqyeshem = item.nota > 4;

        return (
          <View style={styles.karta}>
            <View style={styles.rreshtiKryesor}>
              <Text style={styles.numri}>{index + 1}</Text>

              <View style={styles.informata}>
                <Text style={styles.emri}>{item.emri}</Text>
                <Text style={styles.kursi}>{item.kursi}</Text>
              </View>

              <View style={styles.notaContainer}>
                <Text style={styles.notaLabel}>Nota</Text>
                <Text style={styles.nota}>{item.nota}</Text>
              </View>
            </View>

            <View style={styles.detajet}>
              <Text style={styles.detaji}>📍 {item.qyteti}</Text>
              <Text style={styles.detaji}>🎂 {item.mosha} vjeç</Text>
            </View>

            <Text
              style={[
                styles.statusi,
                eshteShkelqyeshem
                  ? styles.statusiShkelqyeshem
                  : styles.statusiPermiresim,
              ]}
            >
              {eshteShkelqyeshem ? "Shkëlqyeshëm" : "Duhet përmirësim"}
            </Text>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <View style={styles.ndaresi} />}
      // Mesazhi kur lista është bosh.
      ListEmptyComponent={
        <Text style={styles.listaZbrazet}>Nuk ka nxënës në listë.</Text>
      }
    />
  );
}

// Pamja e elementeve.
const styles = StyleSheet.create({
  lista: { paddingBottom: 30 },
  karta: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  rreshtiKryesor: { flexDirection: "row", alignItems: "center" },
  numri: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#0ea5e9",
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 38,
    fontWeight: "bold",
    marginRight: 12,
  },
  informata: { flex: 1 },
  emri: { fontSize: 18, fontWeight: "bold", color: "#0f172a" },
  kursi: { color: "#64748b", marginTop: 3 },
  notaContainer: {
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  notaLabel: { color: "#64748b", fontSize: 11 },
  nota: { color: "#0f172a", fontSize: 18, fontWeight: "bold" },
  detajet: {
    flexDirection: "row",
    gap: 16,
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
  },
  detaji: { color: "#475569", fontSize: 13 },
  statusi: {
    alignSelf: "flex-start",
    marginTop: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
    overflow: "hidden",
  },
  statusiShkelqyeshem: { color: "#166534", backgroundColor: "#dcfce7" },
  statusiPermiresim: { color: "#9a3412", backgroundColor: "#ffedd5" },
  ndaresi: { height: 12 },
  listaZbrazet: { color: "#64748b", textAlign: "center", marginTop: 40 },
});
