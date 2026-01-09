package com.task.student_app.repos;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.task.student_app.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}