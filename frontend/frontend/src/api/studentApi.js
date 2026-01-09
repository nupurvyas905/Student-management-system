import api from "./axios";

export const getStudents = (page = 0, size = 10) =>
  api.get(`/api/students?page=${page}&size=${size}`);

export const getStudentById = (id) =>
  api.get(`/api/students/${id}`);

export const addStudent = (student) =>
  api.post("/api/students", student);

export const updateStudent = (id, student) =>
  api.put(`/api/students/${id}`, student);

export const deleteStudent = (id) =>
  api.delete(`/api/students/${id}`);
