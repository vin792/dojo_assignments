import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _http: Http
    ) {
    this._route.params.subscribe((param) => console.log(param));
    this._http.get('/tasks').subscribe((data)=>{}, (err)=>{}, ()=>{})
    // console.log(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
