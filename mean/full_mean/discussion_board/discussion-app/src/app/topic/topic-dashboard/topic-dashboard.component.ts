import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-dashboard',
  templateUrl: './topic-dashboard.component.html',
  styleUrls: ['./topic-dashboard.component.css']
})
export class TopicDashboardComponent implements OnInit {

  public validLogin: object= {status: false, message: "not logged in"};
  public topics = [];
  public topicsUnfiltered = [];
  public search;
  
  constructor(private _loginService: LoginService, public _topicService: TopicService) { }

  ngOnInit() {
    this.checkLogin()
    this.getTopics()
  }

  checkLogin() {
    this._loginService.checkLogin()
      .subscribe(
        (data) => this.validLogin = data, 
        (error) => console.log(error), 
      )
  }

  getTopics() {
    this._topicService.getTopics()
      .subscribe(
        (data) => {
          this.topics = data;
          this.topicsUnfiltered = data;
        }, 
        (error) => console.log(error), 
      )
  }

  filterTable(value){
    this.topics = Object.assign([], this.topicsUnfiltered).filter(
      topic => topic.title.toLowerCase().indexOf(value.toLowerCase()) > -1)
  }


}
