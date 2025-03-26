import { Component, ViewChild } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskFormComponent, TaskListComponent] // ✅ IMPORTANTE!
})
export class AppComponent {
  @ViewChild(TaskListComponent) taskListComponent!: TaskListComponent;

  loadTasks() {
    this.taskListComponent?.loadTasks();
  }
}
