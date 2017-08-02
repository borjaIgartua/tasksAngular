import { Component, OnInit, Input } from '@angular/core';

import { TasksService } from '../services/tasks/tasks.service';
import { Task } from '../entities/Task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input()
  public task: Task;

  constructor() { }

  ngOnInit() {
    // to implement in a future 
		// this.route.params.switchMap((params: Params) => this.taskService.getTask(+params['id'])
    // 					 .subscribe(task => this.task = task);
  }

}
