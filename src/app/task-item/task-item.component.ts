import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../entities/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  removeTask = new EventEmitter<Task>();

  @Output()
  updateTask = new EventEmitter<Task>();

  @Output()
  taskDetail = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.removeTask.emit(this.task);
  }

  update() {
    this.task.done = !this.task.done;
    this.updateTask.emit(this.task);
  }

  navigate() {
    this.taskDetail.emit(this.task);
  }
}
