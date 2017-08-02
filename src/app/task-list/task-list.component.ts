import { Component, OnInit } from '@angular/core';

import { TasksService  } from '../services/tasks/tasks.service';
import { Task } from '../entities/Task';

import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[] = [];
  public newTask = new Task(0, '', '', false);
  constructor(private taskService: TasksService, private router: Router) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks, err => console.log(err));
  }

  addTask() {
    if (this.newTask.title.length > 0) {
      this.taskService.addTask(this.newTask).subscribe(task => this.tasks.push(task), err => console.log(err));
      this.newTask = new Task(0, '', '', false);

    } else {
      // TODO: show error
    }
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task.id).subscribe(data => {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);

    }, err => console.log(err));
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe(updatedTask => console.log(task), err => console.log(err));
  }

  taskDetail(task: Task) {
    this.router.navigate(['/tasks', task.id]);
  }
}
