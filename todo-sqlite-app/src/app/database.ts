import { Injectable } from '@angular/core';
import initSqlJs from 'sql.js';
@Injectable({
  providedIn: 'root'
})
export class Database {
  private db: any;
  private readonly DB_NAME = 'todo.db';
  constructor() {
    this.initDatabase();
  }
  async initDatabase() {
    try {
      // Cek apakah kita berada di browser
      if (typeof window === 'undefined') {
        console.warn('sql.js hanya bisa dijalankan di browser');
        return;
      }
      const SQL = await initSqlJs({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/sql.js@latest/dist/${file}`
      });
      this.db = new SQL.Database();
      // Buat tabel jika belum ada
      const createTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT NOT NULL,
is_completed BOOLEAN DEFAULT 0,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`;
      this.db.run(createTableQuery);
      console.log('Database SQLite siap digunakan.');
    } catch (error) {
      console.error('Gagal inisialisasi database:', error);
    }
  }
  // Ambil semua tugas
  getAllTasks(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      try {
        const result = this.db.exec('SELECT * FROM tasks ORDER BY created_at DESC');
        if (result.length > 0) {
          resolve(result[0].values.map((row: any[]) => ({
            id: row[0],
            title: row[1],
            isCompleted: !!row[2],
            createdAt: row[3]
          })));
        } else {
          resolve([]);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  // Tambah tugas
  addTask(title: string): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        const insertQuery = `
INSERT INTO tasks (title, is_completed) VALUES (?, ?);
`;
        const stmt = this.db.prepare(insertQuery);
        stmt.run(title, 0);
        const lastId = this.db.exec('SELECT last_insert_rowid()')[0].values[0][0];
        resolve(lastId);
      } catch (error) {
        reject(error);
      }
    });
  }
  // Update tugas
  updateTask(id: number, title: string, isCompleted: boolean): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const updateQuery = `
UPDATE tasks SET title = ?, is_completed = ? WHERE id = ?
`;
        const stmt = this.db.prepare(updateQuery);
        const result = stmt.run(title, isCompleted ? 1 : 0, id);
        resolve(result.changes > 0);
      } catch (error) {
        reject(error);
      }
    });
  }
  // Hapus tugas
  deleteTask(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const deleteQuery = 'DELETE FROM tasks WHERE id = ?';
        const stmt = this.db.prepare(deleteQuery);
        const result = stmt.run(id);
        resolve(result.changes > 0);
      } catch (error) {
        reject(error);
      }
    });
  }
  // Export database ke blob (untuk simpan)
  exportDatabase(): Blob {
    const binary = this.db.export();
    return new Blob([binary], { type: 'application/octet-stream' });
  }
}