# Book Keeper

**Book Keeper** is a simple RESTful API for managing a personal library of books with support for notes. It's built using Node.js, Express, and SQLite (via `better-sqlite3`). The API allows you to add, view, and delete books, as well as attach notes to each one.

## 📂 Project Structure
<pre>
book-keeper/
├── app.js           # Main Express app
├── database.js      # SQLite database setup
├── package.json     # Dependencies and scripts
├── package-lock.json
├── .gitignore       # Ignored files (node_modules, books.db, etc.)
└── README.md
</pre>

## 📦 Features

- 📚 List all books
- 🔍 View a specific book and its notes
- ➕ Add new books
- 📝 Add notes to a book
- ❌ Delete books

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **SQLite** (via [`better-sqlite3`](https://github.com/WiseLibs/better-sqlite3))

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/BomBletTM/book-keeper-backend.git
cd book-keeper
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the server
```bash
node app.js
```
The server will start at:
`http://localhost:3000`

## 🧪 Example API Usage
You can test the API using Postman, curl, or an HTTP client in VS Code.

### 📖 Get all books
```http
GET /books
```

### 📘 Get one book with its notes
```http
GET /books/:id
```

### ➕ Add a new book
```http
POST /books
Content-Type: application/json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}
```

### 📝 Add a note to a book
```http
POST /books/:id/notes
Content-Type: application/json

{
  "content": "Excellent book about clean coding practices."
}
```

### 🗑️ Delete a book
```http
DELETE /books/:id
```

## 💾 Database
The SQLite database file is created automatically as `books.db` in the project root directory. Initial data is inserted when the server starts for the first time.