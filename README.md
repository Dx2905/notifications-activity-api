![CI](https://github.com/<your-username>/<repo-name>/actions/workflows/ci.yml/badge.svg)


# 📣 Notifications Activity API

A production-ready backend API built with **TypeScript**, **Express.js**, **Redis**, **JWT authentication**, and **Docker**. It logs user activities, supports notifications, and includes full CI/CD, linting, and test setup.

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+
- Redis
- Docker (optional but recommended)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notifications-activity-api.git
cd notifications-activity-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root:

```env
PORT=8080
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
```

---

## 🚀 Local Development

### Run Dev Server (with auto-reload)

```bash
npm run dev
```

### Build TypeScript

```bash
npm run build
```

### Start Built App

```bash
npm start
```

---

## 🐳 Docker Usage

### Build and Run with Docker Compose

```bash
docker-compose up --build
```

This will:
- Start your API at `http://localhost:8080`
- Start a Redis server at `localhost:6379`

---

## 📡 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| POST   | `/auth/login`         | Login and get tokens   |
| POST   | `/auth/refresh`       | Refresh access token   |

### 📊 Activity Routes

| Method | Endpoint                      | Description              |
|--------|-------------------------------|--------------------------|
| POST   | `/activity/log`              | Log a user activity (JWT required) |
| GET    | `/activity/user/:userId`     | Fetch user activities (JWT required) |

### 🔔 Notification Route

| Method | Endpoint        | Description                   |
|--------|------------------|-------------------------------|
| POST   | `/notify/alert`  | Send notification (JWT required) |

---

## 🧪 Testing & Linting

### Run Tests

```bash
npm test
```

### Run Linter

```bash
npm run lint
```

### Run Prettier Check

```bash
npx prettier . --check
```

---

## ✅ CI/CD

GitHub Actions is set up to:
- Lint your code
- Run tests
- Build the app

Workflow file: `.github/workflows/ci.yml`

---

## 📂 Project Structure

```
src/
  ├── controllers/
  ├── routes/
  ├── services/
  ├── middleware/
  ├── utils/
  └── index.ts
tests/
  └── auth.test.ts
```

---

## 📜 License

MIT – feel free to fork and build upon!
```

---

