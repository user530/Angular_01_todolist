import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks!: Task[];
  @Output() taskClick = new EventEmitter<number>();
  @Output() deleteTaskClick = new EventEmitter<number>();

  taskClickHandler(taskId: number): void {
    this.taskClick.emit(taskId);
  }

  deleteClickHandler(taskId: number): void {
    this.deleteTaskClick.emit(taskId);
  }
}
