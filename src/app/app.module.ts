import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Task1Component }from './task1/task1.component'
import { Task2Component }from './task2/task2.component'
import { CommentComponent }from './task2/comment/comment.component'
import { ReplyComponent }from './task2/comment/reply/reply.component'

const routes: Routes = [
    { path: '', component: Task1Component },
    { path: 'task2', component: Task2Component }
]

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    CommentComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
