import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  standalone: false,
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
})
export class CourseFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    // O console.log reflete o valor de 'course' recebido da rota.
    // Se 'course' é undefined aqui, o problema está na configuração da rota/resolver.
    console.log("Curso recebido da rota: ", course);

    this.form = this.formBuilder.group({
      // Inicializa o formulário com os dados do curso, se existirem,
      // ou com valores vazios/padrão caso contrário (ex: criando um novo curso).
      _id: [course ? course._id : ''],
      name: [course ? course.name : ''],
      category: [course ? course.category : ''],
    });
  }
  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso!', '', { duration: 5000 });
  }
}
