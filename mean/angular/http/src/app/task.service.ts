import { Injectable } from '@angular/core';
import { Task } from './task';
import { Http, Response } from '@angular/http';
import "rxjs";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TaskService {

  public tasks: Array<Task>;
  public myObs: Observable<Response>;
  public myObs2: Observable<KeyboardEvent> = Observable.fromEvent(document, 'keyup');

  constructor(private _http: Http) {
  }

  retrieve() {
   this.myObs = this._http.get('https://http-61c3e.firebaseio.com/tasks.json')
        .map((response: Response) => response.json())
        
    console.log(this.myObs);
  //       .subscribe(
  //         (data) => {
  //           this.tasks = [];
  //           for (var key in data) {
  //               if (data.hasOwnProperty(key)) {
  //                 this.tasks.push(data[key]);
  //               }
  //             }
  //         },
  //         (error: any) => console.log(error));
   }

  create(newTask: Task) {
    JSON.stringify(newTask);
    this._http.post('https://http-61c3e.firebaseio.com/tasks.json', newTask)
      .subscribe(
      (data: Response) => {},
      (error: any) => null,
      () => this.retrieve());
  }

}
