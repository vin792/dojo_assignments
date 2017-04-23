import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { TopicService } from '../topic.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Login } from '../../login/login';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public validLogin: object= {status: false, message: "not logged in"};
  public userDetails;
  
  constructor(private _loginService: LoginService, public _topicService: TopicService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.checkLogin()
    this.getUserDetails()
  }

  checkLogin() {
    this._loginService.checkLogin()
      .subscribe(
        (data) => this.validLogin = data, 
        (error) => console.log(error), 
      )
  }

  getUserDetails() {
    this._topicService.getUser(this._route.snapshot.params['id'])
      .subscribe(
        (data) => {this.userDetails = data;},
        (error: any) => console.log(error),
        ()=>{})
  }

  logout() {
    this._loginService.logout();
  }

}
