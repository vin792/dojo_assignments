import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task';
import { Response } from '@angular/http';
import "rxjs";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.css']
})
export class TasksCreateComponent implements OnInit {

  public newTask: Task= new Task();
  public subKey;
  public subKey2;

  constructor(private _taskService: TaskService) {}

  ngOnInit() {
    this._taskService.retrieve()

    this._taskService.myObs.subscribe((data) => this.subKey2 = data);

    var keys$ = Observable.fromEvent(document, 'keyup')

    this._taskService.myObs2.subscribe((keyUp: KeyboardEvent) => this.subKey = keyUp.key);
    
    keys$.subscribe((data: KeyboardEvent) => console.log(data.key));
  }
  
  onSubmit() {
    this._taskService.create(this.newTask);
    this.newTask = new Task();
  }

}
