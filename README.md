# MERN Task Manager

A full-stack Task Manager application built using the MERN stack.

## Live Demo

**Frontend Live Link:**
https://task-manager-git-main-ravigopi857-projects.vercel.app/login

**Backend Live Link:**
https://task-manager-backend-y60n.onrender.com

---

## Features

* User Registration
* User Login
* JWT Authentication
* Protected Dashboard
* Create Task
* View Tasks
* Update Task
* Delete Task
* Logout Functionality
* Responsive User Interface
* MongoDB Database Connection

---

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* CORS
* dotenv

### Tools

* VS Code
* Thunder Client
* Git
* GitHub
* MongoDB Atlas
* Render
* Vercel

---

## Task Fields

* Title
* Description
* User ID

---

## API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |
| GET    | /api/tasks         | Get All Tasks |
| POST   | /api/tasks         | Create Task   |
| PUT    | /api/tasks/:id     | Update Task   |
| DELETE | /api/tasks/:id     | Delete Task   |

---

## Project Explanation

This project consists of a React frontend, Node.js and Express.js backend, and MongoDB Atlas database.

The frontend allows users to register, log in, create tasks, update tasks, delete tasks, and view all their tasks through a simple dashboard interface.

Axios is used to communicate between the frontend and backend APIs.

The backend provides REST APIs using Express.js. JWT authentication is implemented to secure protected routes and ensure that only authenticated users can access their tasks.

MongoDB Atlas is used as the database, and Mongoose is used for data modeling and database operations.

The application is deployed using Vercel for the frontend and Render for the backend.

---

## Authentication Flow

1. User registers with email and password.
2. Password is encrypted using bcryptjs.
3. User logs in successfully.
4. Backend generates a JWT token.
5. Token is stored in localStorage.
6. Protected APIs verify the token before granting access.
7. Authenticated users can manage their tasks securely.

---

## How to Run Project

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend/vite-project
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
PORT=5000
```

---

## Future Improvements

* Task Status (Pending / In Progress / Completed)
* Task Search Functionality
* Due Dates
* Task Categories
* Task Priority Levels
* User Profile Management
* Dark Mode

---

## Author

**Ravi Gopi**


