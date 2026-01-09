package com.task.student_app.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.task.student_app.entity.Student;

import java.util.Optional;

public interface StudentService {

    Page<Student> getAllStudents(Pageable pageable);

    Optional<Student> getStudentById(Long id);

    Student saveStudent(Student student);

    Student updateStudent(Long id, Student student);

    void deleteStudent(Long id);
}
