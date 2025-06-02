package com.hermann.controllers;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hermann.models.Course;
import com.hermann.repositories.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    // @Autowired
    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }

    @Bean
    CommandLineRunner initDatabase(CourseRepository courseRepository) {
        return args -> {
            courseRepository.deleteAll();

            Course course = new Course();
            course.setName("Angular com Spring");
            course.setCategory("Fullstack");

            courseRepository.save(course);            

            Course course2 = new Course();
            course2.setName("React com Spring");
            course2.setCategory("Fullstack");
            courseRepository.save(course2);

            Course course3 = new Course();
            course3.setName("Vue com Spring");
            course3.setCategory("Fullstack");
            courseRepository.save(course3);

            Course course4 = new Course();
            course4.setName("Java");
            course4.setCategory("Backend");
            courseRepository.save(course4);
        };
    }
}
