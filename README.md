#  Student Management System (Spring Boot + React)

A full-stack Student Management System built using Spring Boot (REST API) and React (Vite) with JWT authentication, role-based access, and pagination.

This project follows industry-standard architecture and is suitable for college submission, interviews, and deployment.

## Features
### 🔐 Authentication & Security

- JWT-based login authentication

- Spring Security integration

- Role-based access (ADMIN)

- Secure REST APIs

### 👨‍🎓 Student Management

- View students with pagination

- Add new student

- Edit student details

- Delete student

- Pagination



### 🖥 Frontend (React)

- Modern React UI (Vite)

- Bootstrap-based clean UI

- Protected routes

- Automatic redirect after login

- Token stored securely in localStorage

### 🛠 Tech Stack
- Backend

  - Java 17+

  - Spring Boot

  - Spring Security + JWT

  - Spring Data JPA

  - MySQL

  - Maven
- Frontend

  - React (Vite)

  - React Router DOM

  - Axios

  - Bootstrap

  - JavaScript (ES6)

### 📂 Project Structure
  <img width="426" height="711" alt="Screenshot 2026-01-09 173225" src="https://github.com/user-attachments/assets/79370388-6b27-482b-986c-f6768b2437a5" />


### 🔁 Application Flow

- User logs in via React UI

- Backend validates credentials

- JWT token is generated and returned

- Token is stored in browser (localStorage)

- Token is sent in Authorization header

- Secured APIs allow CRUD operations

- Student data is fetched with pagination

### 🔗 API Endpoints
#### Authentication

POST /api/auth/login → Login & get JWT

- GET /api/students?page=0&size=10

- POST /api/students

- PUT /api/students/{id}

- DELETE /api/students/{id}

### 📸 Screenshots
####  Login Page
<img src="https://github.com/user-attachments/assets/ea64befe-fa87-49d9-8386-a623992e1df4" />

####  Student List 
<img src="https://github.com/user-attachments/assets/21cb97ca-94ae-4dc0-88f6-127aaae5af8b" />

####  Add Student
<img src="https://github.com/user-attachments/assets/51793033-02f6-4f88-ab24-7656561789ce" />

####  Edit Student
<img src="https://github.com/user-attachments/assets/59047b14-9cb5-4e5d-880f-5bca6e278212" />

------

#### Backend Runs on:

👉 http://localhost:8080

#### Frontend Runs on:

👉 http://localhost:5173

```java
cd frontend
npm install
npm run dev
```



## 🔑 Default Login Credentials
Username: admin

Password: admin
