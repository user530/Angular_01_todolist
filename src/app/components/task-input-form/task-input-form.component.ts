import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-input-form',
  templateUrl: './task-input-form.component.html',
  styleUrls: ['./task-input-form.component.css'],
})
export class TaskInputFormComponent {
  @Output() addTask = new EventEmitter<Task>();

  taskName: string = '';
  taskDescription: string = '';

  submitHandler(e: Event): void {
    e.preventDefault();

    if (!this.taskName.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      name: this.taskName.trim(),
      description: this.taskDescription.trim(),
      isCompleted: false,
    };

    this.taskName = '';
    this.taskDescription = '';

    this.addTask.emit(newTask);
  }
}
