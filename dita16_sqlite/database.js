import * as SQLite from "expo-sqlite";

let database;

// Hap databazën e re dhe krijon tabelën me kolonën për datë/orë
export async function initializeDatabase() {
  try {
    database = await SQLite.openDatabaseAsync("shenimet_e_re.db");
    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } catch (error) {
    console.error("Gabim në initializeDatabase:", error);
    throw error;
  }
}

export function getNotes() {
  return database.getAllAsync("SELECT * FROM notes ORDER BY id DESC");
}

export function addNote(title) {
  return database.runAsync("INSERT INTO notes (title) VALUES (?)", [title]);
}

export function updateNote(id, title) {
  return database.runAsync("UPDATE notes SET title = ? WHERE id = ?", [title, id]);
}

export function deleteNote(id) {
  return database.runAsync("DELETE FROM notes WHERE id = ?", [id]);
}