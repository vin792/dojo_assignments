import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Array<Task> = [new Task("Task One"), new Task("Task Two"), new Task("Task Three")]
  
  constructor() { }

  ngOnInit() {
  }

}

export class Task {
  public title: string;
  public completed: boolean;
  constructor(title){
    this.title = title;
    this.completed = true;
  }

  changeStatus(){
    this.completed = !this.completed
  }
}