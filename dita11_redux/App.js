import { Provider, useDispatch, useSelector } from "react-redux";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { store } from "./store/store";
import { decrement, increment, reset } from "./store/counterSlice";
function Counter() {
  // Lexon numrin nga Redux.
  const count = useSelector((state) => state.counter.value);
  // Dërgon veprimet te Redux.
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Counter</Text>
      <Text style={styles.count}>{count}</Text>
      {/* Zvogëlon ose rrit numrin. */}
      <View style={styles.row}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>−</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      {/* Kthen numrin në zero. */}
      <Pressable onPress={() => dispatch(reset())}>
        <Text style={styles.reset}>Rivendos</Text>
      </Pressable>
    </View>
  );
}
export default function App() {
  return (
    // Lidh aplikacionin me Redux.
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
// Pamja e elementeve.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#faf5ff",
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#581c87" },
  count: { fontSize: 72, fontWeight: "bold", marginVertical: 28 },
  row: { flexDirection: "row", gap: 18 },
  button: {
    width: 70,
    height: 55,
    backgroundColor: "#7e22ce",
    borderRadius: 12,
    justifyContent: "center",
  },
  buttonText: { color: "white", textAlign: "center", fontSize: 32 },
  reset: { color: "#7e22ce", fontWeight: "bold", marginTop: 24 },
});
