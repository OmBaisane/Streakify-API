# 🚀 Streakify API

A production-ready REST API for a productivity application that enables users to manage tasks, track daily streaks, and securely access their data using JWT Authentication.

---

## 🌐 Live API

🔗 https://streakify-api.onrender.com/

---

## ✨ Features

- JWT Authentication
- Secure Protected Routes
- User Registration & Login
- Full CRUD Operations for Tasks
- Daily Streak Tracking
- User-specific Data Isolation
- RESTful API Design
- Error Handling & Validation

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt

---

## 📦 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register a new user |
| POST | `/api/login` | Login user |

### Tasks (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 🔐 Authentication

All protected routes require:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🔥 Streak Logic

- Completing tasks on consecutive days increases the streak.
- Missing a day resets the streak.
- Multiple task completions on the same day count only once.

---

## 📂 Folder Structure

```text
controllers/
middleware/
models/
routes/
app.js
package.json
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/OmBaisane/Streakify-API.git
```

Navigate to the project

```bash
cd Streakify-API
```

Install dependencies

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server

```bash
npm run dev
```

---

## 📚 Key Learnings

- JWT Authentication
- REST API Design
- Express Middleware
- MongoDB & Mongoose
- Authentication & Authorization
- Secure Route Protection
- Backend Project Structure

---

## 🔮 Future Improvements

- Refresh Tokens
- Email Verification
- Password Reset
- Rate Limiting
- Swagger API Documentation
- Docker Support

---

## 📫 Contact

- 🌐 Portfolio: https://portfolio-nine-phi-ry8fa70ws1.vercel.app
- 💻 GitHub: https://github.com/OmBaisane
- 💼 LinkedIn: https://www.linkedin.com/in/om-baisane-b96625346
- 📧 Email: ombaisane29@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
