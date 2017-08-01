import { Component, OnInit } from '@angular/core';

import { TasksService  } from '../services/tasks/tasks.service';
import { Task } from '../entities/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[] = [];
  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks, err => console.log(err));
  }

}
