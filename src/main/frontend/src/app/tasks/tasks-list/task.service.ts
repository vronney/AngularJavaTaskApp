import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  onTaskAdded = new EventEmitter<Task>();

  constructor(private http: HttpClient) { }

  getTask(): Observable<any> {
    return this.http.get('/api/tasks')
      .pipe(
        map((response: any) => response)
      );

  }

  saveTask(task: Task, checked: boolean) {
    task.completed = checked;
    return this.http.post('/api/tasks/save', task)
        .pipe(
            map(
                (response: Response) => {
                    return response;
                }
            )
        );
  }

  addTask(task: Task) {
    return this.http.post('api/tasks/save', task)
        .pipe(
            map(
                response => response
            )
        );
  }

}
