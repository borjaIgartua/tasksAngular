import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticateGuard } from './guards/can-activate/authenticate.guard';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from './services/tasks/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthenticateGuard, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
