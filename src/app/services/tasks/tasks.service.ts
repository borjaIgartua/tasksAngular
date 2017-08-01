import { Injectable } from '@angular/core';

import {Task} from '../../entities/Task';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TasksService {

  constructor(private http: Http) { }

  getTasks(): Observable<[Task]> {
    return this.http.get('http://192.168.0.33:8080/tasks')
                    .map( (res: Response) => <Task[]>res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTask(task: Task): Observable<Task> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://192.168.0.33:8080/tasks/register', task, options)
                    .map( (res: Response) => <Task>res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeTask(id: number): Observable<Object> {
    const url = 'http://192.168.0.33:8080/tasks/' + id;
    return this.http.delete(url)
                    .map( (res: Response) => <Object>res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateTask(task: Task): Observable<Task> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put('http://192.168.0.33:8080/tasks', task, options)
                    .map( (res: Response) => <Task>res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
