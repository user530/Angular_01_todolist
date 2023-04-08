import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class AppMainServiceService {
  tasks: Task[] = [];
  constructor() {}

  private findTask(taskId: number): Task | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }

  markTask(taskId: number): void {
    const task = this.findTask(taskId);

    if (task) task.isCompleted = !task.isCompleted;
  }

  deleteTask(taskId: number): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (this.tasks[taskIndex]) this.tasks.splice(taskIndex, 1);
  }

  addTask(newTask: Task): void {
    this.tasks.push(newTask);
  }

  fetchTasks(): void {
    // Placeholder fetch
    const tasks = [
      {
        id: 0,
        name: 'Get milk',
        description: '2%, 1 liter',
        isCompleted: true,
      },
      {
        id: 1,
        name: 'Clean the room',
        description: "Don't forget to use vacuum",
        isCompleted: false,
      },
      {
        id: 2,
        name: 'Call grandma',
        description: '',
        isCompleted: false,
      },
    ];

    this.tasks = tasks;
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
