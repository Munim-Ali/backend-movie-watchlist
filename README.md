## ⚙️ Tech Stack

- **Node.js** – JavaScript runtime for server-side development

- **Express.js** – Fast, minimalist web framework for Node.js

- **JWT (JSON Web Tokens)** – Secure authentication and authorization

- **Prisma** – Next-generation ORM for database management

- **PostgreSQL** – Powerful, open-source relational database

- **Zod** – TypeScript-first schema validation library

- **bcryptjs** – Password hashing for secure user authentication

- **dotenv** – Environment variable management

## ⚡️ Features

### 🔐 Authentication System

- 📝 **User Registration** - Secure user signup with email validation

- 🔑 **User Login** - JWT-based authentication with token generation

- 🚪 **User Logout** - Token invalidation and session management

- 🔒 **Password Hashing** - Secure password storage using bcryptjs

- 🛡️ **Protected Routes** - Middleware-based route protection

### 🎬 Movie Management

- 📋 **CRUD Operations** - Create, read, update, and delete movies

- 🎯 **Movie Details** - Store title, overview, release year, genres, runtime, and poster URLs

- 👤 **User Association** - Track which user created each movie

- 🔍 **Query Support** - Filter and search movie data

### 📺 Watchlist System

- ➕ **Add to Watchlist** - Save movies to personal watchlist

- 📊 **Status Tracking** - Track watch status (Planned, Watching, Completed, Dropped)

- ⭐ **Rating System** - Rate movies with optional notes

- 🗑️ **Remove Items** - Delete movies from watchlist

- ✏️ **Update Items** - Modify watchlist item status and ratings

### 🛠️ Additional Features

- ✅ **Request Validation** - Zod schema validation for all endpoints

- 🚨 **Error Handling** - Centralized error handling middleware

- 🔐 **JWT Middleware** - Automatic token verification for protected routes

- 🗄️ **Database Migrations** - Prisma migrations for schema management

- 🌱 **Database Seeding** - Seed script for initial data
