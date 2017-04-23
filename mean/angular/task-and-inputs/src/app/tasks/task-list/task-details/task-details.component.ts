import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task-list.component'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task: Task;
  
  constructor() { }

  ngOnInit() {
  }

}
