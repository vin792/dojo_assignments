import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-dashboard-list',
  templateUrl: './topic-dashboard-list.component.html',
  styleUrls: ['./topic-dashboard-list.component.css']
})
export class TopicDashboardListComponent implements OnInit {

  @Input() topics: any[];

  constructor() { }

  ngOnInit() {
  }

}
