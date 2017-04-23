import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public newLogin: Login = new Login();
  private serverResponse;

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._loginService.login(this.newLogin)
      .subscribe(
        (data: Response) => {this.serverResponse = data},
        (error: any) => console.log(error),
        () => {
          this.newLogin = new Login();
          if("username" in this.serverResponse){
            this._router.navigate(['dashboard']);
          }
        });
    
  }
}
