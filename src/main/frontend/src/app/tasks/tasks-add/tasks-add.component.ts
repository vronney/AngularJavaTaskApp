import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from '../tasks-list/task.service';
import { Task } from '../task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  addTaskValue: string = null;

  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
  }

  getTodayAsString() {
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth();
    let yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    return mm + '/' + dd + '/' + yyyy;
  };

  onTaskAdd(event) {
    let task: Task = new Task((<HTMLInputElement>event.target).value, false, this.getTodayAsString());
      this.taskService.addTask(task)
        .subscribe(
          (newTask: Task) => {
            this.addTaskValue = '';
            this.taskService.onTaskAdded.emit(newTask);
            console.log(newTask);
          }          
        )
        
  };

}
