# 🚀 Streakify API

A backend API to manage daily tasks and track user streaks.

## 🔥 Features

- User Authentication (JWT)
- Create / Read / Update / Delete Tasks
- User-specific data isolation
- 🔥 Daily Streak Tracking System
- Profile API (tasks stats + streak)

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## 📦 API Endpoints

### Auth

POST /api/register  
POST /api/login

### Tasks

POST /api/tasks  
GET /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id

### Profile

GET /api/profile

## ⚙️ Setup

```bash
git clone https://github.com/OmBaisane/Streakify-API
cd streakify-api
npm install
npm run dev

🔐 Environment Variables
Create .env file:

PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

👨‍💻 Author
Om Baisane
