# 🚀 Streakify API

A scalable backend API for a productivity app that helps users manage tasks and maintain daily streaks.

---

## 🔥 Features

- 🔐 User Authentication (JWT)
- 📝 Task Management (Create, Read, Update, Delete)
- 🔒 Protected Routes
- 🔥 Daily Streak Tracking System
- 📊 User-specific Data Isolation

---

## 🧠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt

---

## 📦 API Endpoints

### Auth

- POST `/api/register` → Register user  
- POST `/api/login` → Login user  

---

### Tasks (Protected)

- POST `/api/tasks` → Create task  
- GET `/api/tasks` → Get user tasks  
- PUT `/api/tasks/:id` → Update task  
- DELETE `/api/tasks/:id` → Delete task  

---

## 🔐 Authentication

All protected routes require:
Authorization: Bearer YOUR_TOKEN

---

## 🔥 Streak Logic

- Complete task daily → streak increases  
- Skip a day → streak resets  
- Same day multiple completions → counted once  

---

## 🌐 Live API

👉 https://streakify-api.onrender.com/

---

## ⚙️ Setup

```bash
git clone https://github.com/OmBaisane/Streakify-API
cd streakify-api
npm install
npm run dev

---

📁 Environment Variables

PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

🚀 Author

Made with 💻 by Om Baisane