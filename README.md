#  Student Management System (Spring Boot + React)

A full-stack Student Management System built using Spring Boot (REST API) and React (Vite) with JWT authentication, role-based access, and pagination.


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
## Login Page
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/48efa2ff-c64f-4bb4-a3b3-ae837c0ab7a6" />

---

##  Student List 
<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/c1b1a72e-138b-4d9e-bc3a-9fa81951561b" />

---

##  Add Student
<img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/a7472947-b2c3-4ff2-9d82-993059bfdcdc" />

-----


##  Edit Student
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/70ef062c-35e3-45e4-9fa7-bdc3ab9768d3" />


------

## 🔑 Default Login Credentials
Username: admin

Password: admin

#### Backend Runs on:

 http://localhost:8080

#### Frontend Runs on:

 http://localhost:5173

```java
cd frontend
npm install
npm run dev
```




