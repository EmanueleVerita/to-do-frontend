import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})

export class TaskFormComponent {
  taskForm: FormGroup;

  @Output() taskAdded = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const title = this.taskForm.value.title;
      this.taskService.addTask(title).subscribe(() => {
        this.taskForm.reset();
        this.taskAdded.emit(); // notifica il parent di ricaricare la lista
      });
    }
  }
}
