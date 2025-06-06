package com.hermann.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hermann.models.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
