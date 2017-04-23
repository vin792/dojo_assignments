import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Login } from '../../login/login';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  public topicDetails;
  public validLogin: object= {status: false, message: "not logged in"};
  public newAnswer: object= {text: "", upvotes: 0, downvotes: 0};
  
  constructor(private _topicService: TopicService, private _route: ActivatedRoute, private _loginService: LoginService) { }

  ngOnInit() {
    this.checkLogin();
    this.getTopic();
  }

  checkLogin() {
    this._loginService.checkLogin()
      .subscribe(
        (data) => this.validLogin = data, 
        (error) => console.log(error), 
      )
  }

  getTopic() {
    this._topicService.getTopic(this._route.snapshot.params['id'])
      .subscribe(
        (data) => {this.topicDetails = data;},
        (error: any) => console.log(error),
        ()=>{})
  }

  addAnswer() {
    this._topicService.addAnswer(this.newAnswer, this._route.snapshot.params['id'])
      .subscribe(
        (data) => {},
        (error: any) => console.log(error),
        ()=>{
          this.newAnswer = {text: "", upvotes: 0, downvotes: 0};
          this.getTopic();
        })
  }

  logout() {
    this._loginService.logout();
  }

}
