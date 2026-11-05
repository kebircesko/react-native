import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  addNote,
  deleteNote,
  getNotes,
  initializeDatabase,
  updateNote,
} from "./database";

// Funksion për të formatuar datën/orën saktë nga SQLite
function formatDate(dateString) {
  if (!dateString) return "";
  try {
    // SQLite e ruan si "2026-11-05 23:01:00"
    const date = new Date(dateString.replace(" ", "T") + "Z");
    if (isNaN(date.getTime())) return dateString;

    return date.toLocaleString("sq-AL", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (e) {
    return dateString;
  }
}

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        await initializeDatabase();
        const data = await getNotes();
        setNotes(data);
        setReady(true);
      } catch (error) {
        Alert.alert("Gabim gjatë hapjes së databazës", error.message || "Gabim i panjohur");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  function clearForm() {
    setTitle("");
    setEditingId(null);
  }

  async function saveNote() {
    const value = title.trim();
    if (!value || busy || !ready) return;
    
    setBusy(true);
    try {
      if (editingId === null) {
        await addNote(value);
      } else {
        await updateNote(editingId, value);
      }
      const updatedNotes = await getNotes();
      setNotes(updatedNotes);
      clearForm();
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert("Ruajtja dështoi", error.message || "Gabim i panjohur");
    } finally {
      setBusy(false);
    }
  }

  async function removeNote(id) {
    if (busy || !ready) return;
    setBusy(true);
    try {
      await deleteNote(id);
      const updatedNotes = await getNotes();
      setNotes(updatedNotes);
      if (editingId === id) clearForm();
    } catch (error) {
      Alert.alert("Fshirja dështoi", error.message || "Gabim i panjohur");
    } finally {
      setBusy(false);
    }
  }

  function confirmDelete(id) {
    if (busy || !ready) return;
    Alert.alert("Fshije shënimin?", "Ky veprim nuk kthehet prapa.", [
      { text: "Anulo", style: "cancel" },
      { text: "Fshi", style: "destructive", onPress: () => removeNote(id) },
    ]);
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0369a1" />
        <Text style={styles.loadingText}>Duke u lidhur me databazën...</Text>
      </View>
    );
  }

  if (!ready) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Databaza nuk u hap me sukses.</Text>
        <Text style={styles.errorSubtext}>Ju lutem rinisni aplikacionin.</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Shënimet e mia</Text>
        <Text style={styles.subtitle}>Dita 16 · Databaza SQLite</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Shkruaj një shënim të ri..."
          placeholderTextColor="#94a3b8"
          value={title}
          onChangeText={setTitle}
          editable={!busy}
          maxLength={200}
          onSubmitEditing={saveNote}
          returnKeyType="done"
        />
        
        <Pressable
          style={[styles.button, (!title.trim() || busy) && styles.disabled]}
          onPress={saveNote}
          disabled={!title.trim() || busy}
        >
          <Text style={styles.buttonText}>
            {busy ? "Duke ruajtur..." : editingId === null ? "+ Shto shënimin" : "✓ Ruaj ndryshimin"}
          </Text>
        </Pressable>
        
        {editingId !== null && (
          <Pressable onPress={clearForm} disabled={busy} style={styles.cancel}>
            <Text style={styles.cancelText}>Anulo ndryshimin</Text>
          </Pressable>
        )}
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => String(item.id)}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.empty}>Ende nuk ka shënime. Shto një të parë!</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.note}>{item.title}</Text>
            </View>
            
            <View style={styles.cardFooter}>
              <Text style={styles.date}>📅 {formatDate(item.created_at)}</Text>
              
              <View style={styles.actions}>
                <Pressable 
                  disabled={busy} 
                  onPress={() => {
                    setEditingId(item.id);
                    setTitle(item.title);
                  }} 
                  style={styles.action}
                >
                  <Text style={styles.edit}>Ndrysho</Text>
                </Pressable>
                <Pressable 
                  disabled={busy} 
                  onPress={() => confirmDelete(item.id)} 
                  style={styles.action}
                >
                  <Text style={styles.delete}>Fshi</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
      
      <Text style={styles.footer}>Shënimet ruhen në këtë pajisje, edhe pas mbylljes.</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8fafc", padding: 24 },
  loadingText: { marginTop: 16, fontSize: 16, color: "#475569" },
  errorText: { fontSize: 18, fontWeight: "bold", color: "#b91c1c", textAlign: "center" },
  errorSubtext: { fontSize: 14, color: "#475569", marginTop: 8, textAlign: "center" },
  
  header: { paddingHorizontal: 24, paddingTop: 64, paddingBottom: 16, backgroundColor: "#ffffff", borderBottomWidth: 1, borderBottomColor: "#e2e8f0" },
  title: { fontSize: 28, fontWeight: "800", color: "#0f172a", letterSpacing: -0.5 },
  subtitle: { color: "#64748b", marginTop: 4, fontSize: 14, fontWeight: "500" },
  
  formContainer: { padding: 20, backgroundColor: "#ffffff", borderBottomWidth: 1, borderBottomColor: "#e2e8f0" },
  input: { backgroundColor: "#f1f5f9", padding: 16, borderRadius: 12, fontSize: 16, color: "#0f172a", marginBottom: 12 },
  button: { backgroundColor: "#0284c7", padding: 16, borderRadius: 12, shadowColor: "#0284c7", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold", fontSize: 16 },
  disabled: { opacity: 0.5, shadowOpacity: 0 },
  cancel: { alignItems: "center", padding: 12, marginTop: 4 },
  cancelText: { color: "#64748b", fontWeight: "600" },

  listContainer: { padding: 20, paddingBottom: 40 },
  card: { 
    backgroundColor: "white", 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 12, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 8, 
    elevation: 2,
    borderWidth: 1,
    borderColor: "#f1f5f9"
  },
  cardHeader: { marginBottom: 12 },
  note: { fontSize: 17, color: "#1e293b", lineHeight: 24, fontWeight: "500" },
  cardFooter: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderTopColor: "#f1f5f9", paddingTop: 12 },
  date: { fontSize: 12, color: "#94a3b8", fontWeight: "600" },
  actions: { flexDirection: "row", gap: 8 },
  action: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8, backgroundColor: "#f8fafc" },
  edit: { color: "#0284c7", fontWeight: "bold", fontSize: 13 },
  delete: { color: "#ef4444", fontWeight: "bold", fontSize: 13 },
  
  empty: { textAlign: "center", marginTop: 40, color: "#94a3b8", fontSize: 16 },
  footer: { fontSize: 12, color: "#94a3b8", textAlign: "center", paddingVertical: 16, backgroundColor: "#f8fafc" },
});