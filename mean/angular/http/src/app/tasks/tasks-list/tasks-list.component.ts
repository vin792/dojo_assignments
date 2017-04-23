import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input() task: object;

  constructor(private _taskService: TaskService) { }

  ngOnInit() {}

}
