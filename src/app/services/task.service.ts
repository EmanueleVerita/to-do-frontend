import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  addTask(title: string): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, { title });
  }

  toggleTask(id: number): Observable<Task> {
    return this.http.patch<Task>(`${this.baseUrl}/${id}`, {});
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
