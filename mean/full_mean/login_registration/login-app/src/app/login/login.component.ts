import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public newLogin: Login = new Login();

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.login(this.newLogin);
    this.newLogin = new Login();
  }

}
