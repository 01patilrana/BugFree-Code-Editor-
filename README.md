# Cloud Code Execution Platform | Bug-Free Code Editor | 2025 🚀

Cloud-based scalable code execution with Docker sandboxing, AWS S3 storage, real-time collaboration via Socket.io, concurrent users, and DSA challenges.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/) [![Live Demo](https://img.shields.io/badge/Live-Demo-green?logo=vercel)](http://localhost:3000)

## ✨ Features

- **Docker Sandboxed Execution** ⚙️ - Secure JS/Python/Node execution in isolated containers
- **AWS S3 Code Storage** ☁️ - Persistent cloud storage with sharing links
- **Real-time Collaboration** 🔴 - Socket.io live cursors, console streaming
- **Concurrent Users** 👥 - Rate-limited, monitored multi-user sessions
- **Secure REST APIs** 🔐 - JWT auth, MySQL users, input validation
- **DSA Challenge Platform** 🧠 - 50+ problems with cloud submission/leaderboard
- **Multi-language Editor** ✏️ - HTML/CSS/JS/Python with CodeMirror + Pyodide fallback
- **Responsive UI** 📱 - Themes, live preview, error analysis

## 🛠️ Engineered Architecture

```
Docker + AWS S3 Backend | Concurrent Users | Real-time Monitoring
├── Express + Socket.io APIs
├── MySQL Auth + Redis Sessions
├── Dockerode Sandbox Execution Workers
├── S3 Persistent Code Storage
└── Rate Limiting + Security (Helmet)
```

## 🚀 Quick Start (Local Dev)

### Prerequisites
- Docker & Docker Compose
- MySQL (or docker-compose handles)
- Node.js 20+
- AWS Account (optional for S3 - fill .env)

### 1. Clone & Install
```bash
git clone <your-repo>
cd cloud-code-platform
npm install
```

### 2. AWS Setup (for S3)
1. Create S3 bucket `cloud-code-platform-bucket` (or custom)
2. IAM user with S3 FullAccess
3. Fill `.env`:
```
AWS_ACCESS_KEY_ID=yourkey
AWS_SECRET_ACCESS_KEY=yoursecret
AWS_REGION=us-east-1  
AWS_S3_BUCKET=your-bucket
```

### 3. Docker Development
```bash
docker-compose up -d  # MySQL + Redis + App
# or local:
npm start
```

### 4. Test APIs
```bash
# Register
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"pass123"}'

# Login (grab token cookie)
curl -X POST http://localhost:3000/api/auth/login -b "token=your-jwt" ...

# Health
curl http://localhost:3000/api/health
```

### 5. Open App
[http://localhost:3000](http://localhost:3000) - Editor + Auth + DSA

## 🏗️ Production Deployment

### Docker Build & Run
```bash
npm run docker:build
docker run -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock cloud-code-platform
```

### Cloud (AWS/EC2 + ECS)
1. ECR Docker registry
2. ECS Fargate cluster
3. RDS MySQL + ElastiCache Redis
4. ALB + Route53

## 📊 API Endpoints (Secure)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Create user |
| POST | `/api/auth/login` | No | JWT login |
| GET | `/api/auth/me` | Yes | User profile |
| POST | `/api/execute` | Yes | Docker code exec |
| POST | `/api/save/:sessionId` | Yes | S3 code upload |
| GET | `/api/sessions` | Yes | User sessions |

## 🔧 Technologies

**Backend**: Node.js/Express | MySQL | Redis | Docker | AWS SDK v2
**Real-time**: Socket.io
**Security**: JWT | bcrypt | Helmet | RateLimit
**Frontend**: CodeMirror | Pyodide (Python WASM)

## 📈 Concurrent Architecture
- **Rate Limiting**: 100 req/min per IP
- **Docker Workers**: Auto-spawn per language
- **Socket Rooms**: Per-session collab
- **S3 Buckets**: user/{id}/{session}.json

## 🤝 Contributing
1. Fork → Branch `feature/xxx`
2. `npm install && npm test`
3. PR to `main`

## 📄 License
ISC

**Engineered for 2025 Scalability** 🌐

