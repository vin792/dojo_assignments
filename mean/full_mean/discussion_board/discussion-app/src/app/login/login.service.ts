import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs';

@Injectable()
export class LoginService {



  constructor(private _http: Http, private _router: Router) { }

  login(newLogin) {
    return this._http.post('/login', newLogin)
      .map((response: Response) => response.json())
  }

  logout() {
    this._http.get('/logout')
      .subscribe(
        (data) => {},
        (error) => {},
        () => {this._router.navigate(['login'])})
  }

  checkLogin() {
    return this._http.get('/checklogin')
      .map((response: Response) => response.json())
  }
}
