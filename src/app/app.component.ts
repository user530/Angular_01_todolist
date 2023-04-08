import { Component, OnInit } from '@angular/core';
import { AppMainServiceService } from './services/app-main-service.service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppMainServiceService],
})
export class AppComponent implements OnInit {
  title: string;
  tasks: Task[];

  constructor(private myAppService: AppMainServiceService) {
    this.title = '01_todolist';
    this.tasks = [];
  }

  taskClickHandler(taskIndex: number): void {
    this.myAppService.markTask(taskIndex);
  }

  deleteClickHandler(taskIndex: number): void {
    this.myAppService.deleteTask(taskIndex);
  }

  submitClickHandler(newTask: Task): void {
    this.myAppService.addTask(newTask);
  }

  ngOnInit(): void {
    this.myAppService.fetchTasks();
    this.tasks = this.myAppService.getTasks();
  }
}
