import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import {AuthenticationComponent} from '../authentication/authentication.component';
import {AuthenticateGuard} from '../guards/can-activate/authenticate.guard';

import {TaskListComponent} from '../task-list/task-list.component';
import {TaskDetailComponent} from '../task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'tasks', component: TaskListComponent, canActivate: [AuthenticateGuard]},
  { path: 'task/:id', component: TaskDetailComponent, canActivate: [AuthenticateGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
