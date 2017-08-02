import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { TasksService } from '../services/tasks/tasks.service';
import { Task } from '../entities/Task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  public task: Task;

  constructor(private taskService: TasksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.taskService.getTask(+params['id']))
                     .subscribe(task => this.task = task, err => console.log(err));
  }

  onSubmitTask() {
    this.taskService.updateTask(this.task).subscribe(task => this.task = task, err => console.log(err));
  }
}
