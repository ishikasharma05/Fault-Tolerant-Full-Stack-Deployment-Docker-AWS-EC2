# 📝 Docker Notes App

A full-stack Notes application built with **React**, **Express.js**, and **MongoDB**, fully containerized using **Docker** and **Docker Compose**.

This project demonstrates how to containerize a modern web application, connect multiple services using Docker Compose, persist database data with Docker volumes, and deploy the application on an AWS EC2 instance.

---

# 🚀 Features

- 📝 Create Notes
- 📖 View Notes
- 🗑 Delete Notes
- RESTful Express API
- MongoDB Database
- React Frontend
- Dockerized Frontend & Backend
- Nginx for Production Frontend
- Docker Compose Orchestration
- Persistent MongoDB Storage
- Automatic Container Restart
- Docker Log Rotation
- Ready for AWS EC2 Deployment

---

# 🛠 Tech Stack

## Frontend
- React
- Vite
- Nginx

## Backend
- Node.js
- Express.js
- Mongoose

## Database
- MongoDB

## DevOps
- Docker
- Docker Compose
- AWS EC2
- Linux

---

# 🏗 Architecture

```
                 User
                   │
                   ▼
          ┌─────────────────┐
          │     Nginx       │
          │  React Frontend │
          └────────┬────────┘
                   │
             HTTP Requests
                   │
                   ▼
          ┌─────────────────┐
          │ Express Backend │
          │     REST API    │
          └────────┬────────┘
                   │
             Mongoose ODM
                   │
                   ▼
          ┌─────────────────┐
          │    MongoDB      │
          └─────────────────┘
```

---

# 📂 Project Structure

```
docker-notes-app
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

---

# ⚙️ Prerequisites

Before running this project, install:

- Git
- Docker Desktop
- Docker Compose

Verify Docker installation:

```bash
docker --version
docker compose version
```

---

# 📥 Clone the Repository

```bash
git clone https://github.com/<your-username>/docker-notes-app.git

cd docker-notes-app
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/notesdb
```

---

# 🐳 Build Docker Images

```bash
docker compose build
```

---

# ▶️ Run the Application

```bash
docker compose up -d
```

---

# ✅ Verify Running Containers

```bash
docker compose ps
```

Expected output:

```
notes-frontend
notes-backend
notes-mongo
```

---

# 🌐 Access the Application

## Frontend

```
http://localhost
```

## Backend

```
http://localhost:5000
```

## Health Check

```
http://localhost:5000/api/status
```

---

# 📡 API Endpoints

## Get All Notes

```
GET /api/notes
```

---

## Create Note

```
POST /api/notes
```

Example:

```json
{
  "title": "Docker",
  "content": "My first note"
}
```

---

## Delete Note

```
DELETE /api/notes/:id
```

---

## Health Check

```
GET /api/status
```

Returns:

- **200 OK** – Application is healthy
- **503 Service Unavailable** – Database unavailable

---

# 💾 Persistent Storage

MongoDB data is stored using a Docker named volume.

```
mongo-data
```

This ensures notes remain available even after:

- `docker compose down`
- `docker compose up`
- Container recreation

---

# 🔄 Container Restart Policy

Each service uses:

```yaml
restart: unless-stopped
```

This automatically restarts containers after:

- Docker daemon restart
- EC2 reboot
- Unexpected container failure

---

# 📜 Docker Log Rotation

To prevent log files from consuming excessive disk space:

```yaml
logging:
  driver: json-file
  options:
    max-size: "10m"
    max-file: "3"
```

---

# ☁️ AWS Deployment

This application can be deployed on an AWS EC2 instance using Docker Compose.

Deployment includes:

- Docker Compose
- Persistent Docker Volumes
- Restart Policies
- Docker Log Rotation
- Security Groups
- Elastic IP (Optional)

---

# 🛑 Stop the Application

```bash
docker compose down
```

---

# 🧹 Remove Containers and Volumes

```bash
docker compose down -v
```

> **Warning:** This command permanently removes the MongoDB volume and deletes all stored notes.

---

# 📸 Screenshots

Add screenshots here after deployment.

### Home Page

```
screenshots/home.png
```

### Docker Containers

```
screenshots/docker-ps.png
```

### Health Check

```
screenshots/health-check.png
```

### AWS EC2 Deployment

```
screenshots/aws-ec2.png
```

---

# 🚀 Future Improvements

- Update Notes
- User Authentication
- Search Functionality
- Categories & Tags
- HTTPS with Nginx
- CI/CD using GitHub Actions
- Prometheus & Grafana Monitoring

---

# 📄 License

This project was developed for learning Docker, Docker Compose, and AWS deployment concepts.
