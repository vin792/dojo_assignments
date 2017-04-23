import { Injectable } from '@angular/core';
import { Register } from './register';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Router } from '@angular/router';
import { Login } from './login';

@Injectable()
export class UserService {

  public serverResponse: object = {status: true, message: "all good"};
  public serverResponseLogin: object = {status: true, message: "all good"};
  public user = null;
  
  constructor(private _http: Http, private _router: Router) { }

  createUser(newRegister: Register) {
    this._http.post('/register.json', newRegister)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.serverResponse = data
          if("user" in data){
            this.user = data.user;
          }
        },
        (error: any) => console.log(error),
        () => { 
          if(this.user){
            this._router.navigate(['landing']);
          }
        })
  }

  logout(){
    this._http.get('/logout')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Response) => {console.log(data)},
        (error: any) => console.log(error),
        () => this.user=null);
  }

  login(loginUser: Login) {
    this._http.post('/login.json', loginUser)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.serverResponseLogin = data
          if("user" in data){
            this.user = data.user;
          }
        },
        (error: any) => console.log(error),
        () => {
          if(this.user){
            this._router.navigate(['landing']);
          }
        })
  }

}
