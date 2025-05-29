import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { _id: '1', name: 'Angular Basics', category: 'Frontend' },
    { _id: '2', name: 'Node.js Fundamentals', category: 'Backend' },
    { _id: '3', name: 'React Hooks', category: 'Frontend' },
    { _id: '4', name: 'Express.js', category: 'Backend' },
    { _id: '5', name: 'MongoDB', category: 'Database' },
    { _id: '6', name: 'Vue.js Essentials', category: 'Frontend' },
    { _id: '7', name: 'Django for Beginners', category: 'Backend' },
    { _id: '8', name: 'Flask Web Development', category: 'Backend' },
    { _id: '9', name: 'SQL Basics', category: 'Database' },
    { _id: '10', name: 'GraphQL Introduction', category: 'API' },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
