const path = require('path');
const Database = require("better-sqlite3");

const dbPath = path.resolve(__dirname, 'books.db');
const db = new Database(dbPath);

db.exec(
  "CREATE TABLE IF NOT EXISTS question (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT NOT NULL)",
);

db.exec(
  "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, author TEXT NOT NULL, year INTEGER)",
);

db.exec(
  "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, book_id INTEGER NOT NULL, content TEXT NOT NULL, FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE)",
);

db.exec(
  "INSERT INTO books (title, author, year) VALUES ('Atlas Shrugged', 'Ayn Rand', '1957'), ('T', 'Victor Pelevin', '2009'), ('Metro 2033', 'Dmitry Glukhovsky', '2002'), ('A Game of Thrones', 'George R. R. Martin', '1996')",
);

db.exec(
  "INSERT INTO notes (book_id, content) VALUES ('1','The book depicts a dystopian United States in which heavy industry companies suffer under increasingly burdensome laws and regulations.'), ('2','The novel recounts the journey of the martial arts master Count T. (a reference to Leo Tolstoy)'), ('3','Post-apocalyptic fiction novel. It is set within the Moscow Metro, where the last survivors hide after a global nuclear holocaust'), ('4','In the novel, recounting events from various points of view, Martin introduces the plot-lines of the noble houses of Westeros, the Wall, and the Targaryens.')"
);

module.exports = db;