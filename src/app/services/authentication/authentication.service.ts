import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../entities/User';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {


  constructor(private http: Http) { }

  login(username: string, password: string): Observable<User[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://192.168.0.33:8080/login', {'username': username, 'password': password}, options)
                    .map( (res: Response) => <User[]>res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  register(username: string, password: string, email: string): Observable<User[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://192.168.0.33:8080/signup', {'username': username, 'password': password, 'email': email}, options)
                    .map( (res: Response) => <User[]>res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
