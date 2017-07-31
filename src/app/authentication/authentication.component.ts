import { Component, OnInit } from '@angular/core';

import {AuthenticationService} from '../services/authentication/authentication.service';
import {User} from '../entities/User';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public user = new User(0, '', '', '');
  public isRegistering: Boolean;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  toggle() {
    this.isRegistering = !this.isRegistering;
  }

  onSubmitLogin() {
    this.authenticationService.login(this.user.name, this.user.password)
                              .subscribe(data => console.log(data), err => console.log(err));
  }

  onSubmitRegister() {
    this.authenticationService.register(this.user.name, this.user.password, this.user.email)
                              .subscribe(data => console.log(data), err => console.log(err));
  }
}
